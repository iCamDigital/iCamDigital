"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useTranslation } from "@/app/i18n/client";
import PacksGalleryZone from "@/components/PacksGalleryZone";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const packsIsEnabled = process.env.NEXT_PUBLIC_TUNE_TYPE === "packs";

export default async function Index() {
  if (!packsIsEnabled) {
    redirect("/overview");
  }
  const router = useRouter();
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="w-full mx-auto relative">
      <Button
        variant="default"
        size="sm"
        onClick={() => router.push("/overview")}
        className="absolute left-5 top-5"
      >
        ← {t("back")}
      </Button>

      <div className="flex flex-col items-center justify-center p-5 space-y-2">
        <h1 className="text-5xl font-extrabold uppercase tracking-wide">
          {t("stylesGallery")}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t("chooseTheTypeOfImagesYouWouldLikeToCreate.")}
        </p>
      </div>

      <div className="px-4">
        <PacksGalleryZone />
      </div>
    </div>
  );
}
