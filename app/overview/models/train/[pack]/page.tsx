"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useTranslation } from "@/app/i18n/client";
import TrainModelZone from "@/components/TrainModelZone";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

const packsIsEnabled = process.env.NEXT_PUBLIC_TUNE_TYPE === "packs";

export default async function Index({ params }: { params: { pack: string } }) {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="w-full mx-auto p-5 relative">
      <Link
        href={packsIsEnabled ? "/overview/packs" : "/overview"}
        className="absolute left-5 top-5"
      >
        <Button variant="default" size="sm">
          ← {t("back")}
        </Button>
      </Link>

      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-5xl font-bold tracking-wide">{t("trainModel")}</h1>
        <p className="text-sm text-muted-foreground">
          {t("chooseAName,Type,AndUploadSomePhotosToGetStarted.")}
        </p>
      </div>

      <div className="flex justify-center w-full mt-8">
        <div className="max-w-2xl w-full">
          <TrainModelZone packSlug={params.pack} />
        </div>
      </div>
    </div>
  );
}
