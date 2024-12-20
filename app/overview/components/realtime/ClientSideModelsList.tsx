"use client";

import { Button } from "@/components/ui/button";
import { Database } from "@/types/supabase";
import { modelRowWithSamples } from "@/types/utils";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModelsTable from "../../../../components/ModelsTable";
import ClearModels from "../../../../components/ClearModels";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useTranslation } from "@/app/i18n/client";

const packsIsEnabled = process.env.NEXT_PUBLIC_TUNE_TYPE === "packs";

export const revalidate = 0;

type ClientSideModelsListProps = {
  serverModels: modelRowWithSamples[] | [];
};

export default function ClientSideModelsList({
  serverModels,
}: ClientSideModelsListProps) {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );

  const [models, setModels] = useState<modelRowWithSamples[]>(serverModels);

  useEffect(() => {
    const channel = supabase
      .channel("realtime-models")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "models" },
        async (payload: any) => {
          const samples = await supabase
            .from("samples")
            .select("*")
            .eq("modelId", payload.new.id);

          const newModel: modelRowWithSamples = {
            ...payload.new,
            samples: samples.data,
          };

          const dedupedModels = models.filter(
            (model) => model.id !== payload.old?.id
          );

          setModels([...dedupedModels, newModel]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, models, setModels]);

  const handleDeleteModels = () => {
    setModels([]);
  };

  return (
    <div className="container flex flex-col">
      <div className="flex justify-end space-x-2 mt-8 mb-4">
        {models.length > 0 && <ClearModels onClear={handleDeleteModels} />}
        <Link
          href={
            packsIsEnabled
              ? "/overview/packs"
              : "/overview/models/train/raw-tune"
          }
        >
          <Button size="default" variant="default">
            {t("trainModel")}
          </Button>
        </Link>
      </div>
      {models && models.length > 0 ? (
        <ModelsTable models={models} />
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center">
          <Image
            src="/placeholder.png"
            alt="No models"
            width={200}
            height={200}
            className="mb-4 mt-20 [filter:brightness(0)_saturate(100%)_invert(20%)_sepia(100%)_saturate(1000%)_hue-rotate(177deg)_brightness(100%)_contrast(70%)]"
          />
          <p className="text-base text-gray-600">{t("noModelsAvailable.")}</p>
        </div>
      )}
    </div>
  );
}
