"use client";
import Head from "next/head";
import React from "react";
import { useTranslation } from "@/app/i18n/client";
import { useLanguage } from "@/app/contexts/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  return (
    <div className="flex-grow pb-6">
      <Head>
        <title>{t("About Us | Framecast AI")}</title>
        <meta
          name="description"
          content="About Us for Framecast AI, the AI headshot generator platform."
        />
      </Head>
      <main className="max-w-[80rem] mt-14 px-4 sm:px-6 lg:px-8 mx-auto text-justify">
        <h1 className="text-main text-6xl font-bold mx-auto mb-10 text-blue-600 tracking-wide lg:mb-14">
          {t("aboutUs")}
        </h1>

        <section className="mb-6">
          <p className="mb-4">
            {t(
              "AtFramecastAiWeBelieveThatEveryoneDeservesAProfessionalHeadshotThatCapturesTheirUniqueEssenceOurAiPoweredHeadshotGeneratorMakesItEasyToCreateStunningHighQualityImagesWithoutTheHassleOfTraditionalPhotoShootsWithJustAFewClicksYouCanExploreCountlessStylesBackgroundsAndExpressionsToFindThePerfectHeadshotForYourPersonalOrProfessionalNeedsSayGoodbyeToAwkwardPosesAndExpensivePhotographersFramecastAiPutsThePowerOfProfessionalHeadshotsRightAtYourFingertips"
            )}
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
