"use client";
import React from "react";
import Head from "next/head";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useTranslation } from "@/app/i18n/client";

const TermsOfService: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="flex-grow pb-6">
      <Head>
        <title>{t("Terms of Service | Framecast AI")}</title>
        <meta
          name="description"
          content="Terms of service and legal agreement for using Framecast AI's headshot generation platform."
        />
      </Head>
      <main className="max-w-[80rem] mt-14 px-4 sm:px-6 lg:px-8 mx-auto text-justify">
        <h1 className="text-main text-6xl font-bold mx-auto mb-10 text-blue-600 tracking-wide lg:mb-14">
          {t("termsOfService")}
        </h1>

        <p className="mb-4 text-justify">
          {t("WelcomeToFramecastAI")}{" "}
          <a href="https://framecast-ai.vercel.app" className="text-blue-600">
            ("Framecast AI").{" "}
          </a>{" "}
          {t("ByUsingOurServiceYouAgreeToTheseTerms")}
        </p>

        <section className="mb-6 text-justify">
          <h2 className="text-xl font-semibold mb-2">
            {t("1AcceptanceOfTerms")}
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>{t("Agreement")}:</strong>{" "}
              {t("ByAccessingOrUsingOurServiceYouAgreeToBeBindByTheseTerms")}
            </li>
            <li>
              <strong>{t("Eligibility")}:</strong>{" "}
              {t("YouMustBe18YearsOrOlderToUseThisService")}
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {t("2ServiceDescription")}
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>{t("AIHeadshots")}:</strong>{" "}
              {t("WeProvideAIGeneratedHeadshotServices")}
            </li>
            <li>
              <strong>{t("Limitations")}:</strong>{" "}
              {t("WeReserveTheRightToModifyOrDiscontinueTheServiceAtAnyTime")}
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {t("3UserObligations")}
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>{t("AccountResponsibility")}:</strong>{" "}
              {t("YouAreResponsibleForMaintainingYourAccountSecurity")}
            </li>
            <li>
              <strong>{t("ProhibitedUses")}:</strong>{" "}
              {t("YouMayNotUseTheServiceForIllegalOrUnauthorizedPurposes")}
            </li>
            <li>
              <strong>{t("ContentGuidelines")}:</strong>
              <ul className="list-disc list-inside pl-5 mt-2">
                <li>{t("NoInappropriateOrOffensiveContent")}</li>
                <li>{t("NoViolationOfIntellectualPropertyRights")}</li>
                <li>{t("NoMisrepresentationOrFraudulentUse")}</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {t("4IntellectualProperty")}
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>{t("Ownership")}:</strong>{" "}
              {t("YouRetainRightsToYourOriginalPhotos")}
            </li>
            <li>
              <strong>{t("AIGeneratedContent")}:</strong>{" "}
              {t("GeneratedHeadshotsAreLicensedToYouForPersonalUse")}
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {t("5LimitationOfLiability")}
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>{t("Disclaimer")}:</strong>{" "}
              {t("ServiceIsProvidedAsIsWithoutWarranties")}
            </li>
            <li>
              <strong>{t("LiabilityLimits")}:</strong>{" "}
              {t("WeAreNotLiableForAnyIndirectOrConsequentialDamages")}
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <p>
            {t("ForQuestionsAboutTheseTermsPlease")}{" "}
            <a
              href="https://www.framecastai.com/contact-us"
              className="text-blue-600"
            >
              {t("contact")}
            </a>{" "}
            {t("OurSupportTeamAt")}{" "}
            <a
              href="mailto:support@framecastai.com"
              className="text-blue-500 hover:underline"
            >
              support@framecastai.com
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-gray-600">
            {t("LastUpdated")}: {new Date().toLocaleDateString()}
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsOfService;
