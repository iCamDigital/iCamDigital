"use client";
import React from "react";
import Head from "next/head";
import { useTranslation } from "@/app/i18n/client";
import { useLanguage } from "@/app/contexts/LanguageContext";

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  return (
    <div className="flex-grow pb-6">
      <Head>
        <title>{t("Privacy Policy | Framecast AI Headshot Generator")}</title>
        <meta
          name="description"
          content="Privacy policy for Framecast AI, outlining data collection, use, and protection."
        />
      </Head>
      <main className="max-w-[80rem] mt-14 px-4 sm:px-6 lg:px-8 mx-auto text-justify">
        <h1 className="text-main text-6xl font-bold mx-auto mb-10 text-blue-600 tracking-wide lg:mb-14">
          {t("privacyPolicy")}
        </h1>
        <p className="mb-4">{t("Effective Date: [28 Sep 2024]")}</p>

        <section className="mb-6">
          <p className="mb-4">
            {t("atFramecastAI,AccessibleFrom")}{" "}
            <a
              href=""
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://framecast-ai.vercel.app
            </a>{" "}
            {t(
              "WeAreCommittedToProtectingYourPrivacyThisPrivacyPolicyExplainsWhatInformationWeCollectHowWeUseItAndYourRightsRegardingYourPersonalDataPleaseTakeAMomentToReadThisPolicyCarefully"
            )}
          </p>

          <h2 className="text-xl font-semibold mb-2">
            {t("InformationWeCollect")}
          </h2>
          <p className="mb-4">
            {t(
              "WeCollectTheFollowingTypesOfDataToProvideAndImproveOurServices"
            )}
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>{t("PersonalInformation")}:</strong>{" "}
              {t(
                "NameEmailAddressAccountCredentialsPaymentInformationAndImagesOrMediaYouUploadForProcessingInOurAiHeadshotGenerator"
              )}
            </li>
            <li>
              <strong>{t("UsageData")}:</strong>{" "}
              {t(
                "IpAddressesBrowserTypesDeviceInformationPagesVisitedFeaturesUsedTimeSpentOnOurSiteCrashReportsAndOtherDiagnosticData"
              )}
            </li>
            <li>
              <strong>{t("CookiesAndTrackingTechnologies")}:</strong>{" "}
              {t("WeUseCookiesAndSimilarTrackingTechnologiesIncluding")}
              <ul className="list-disc list-inside pl-5 mt-2">
                <li>{t("NecessaryCookiesForBasicWebsiteFunctionalities")}.</li>
                <li>{t("AnalyticsCookiesToCollectPerformanceData")}.</li>
                <li>
                  {t(
                    "AdvertisingCookiesForPersonalizedAdsAndMeasuringTheirEffectiveness"
                  )}
                  .
                </li>
              </ul>
            </li>
          </ul>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {t("HowWeUseYourInformation")}
            </h2>
            <p className="mb-4">
              {t("WeUseTheCollectedInformationForVariousPurposesIncluding")}
            </p>
            <ul className="list-disc list-inside pl-5">
              <li>{t("ServiceProvisionToProcessAndDeliverYourHeadshots")}.</li>
              <li>{t("CustomerSupportToAssistWithInquiriesAndIssues")}.</li>
              <li>{t("PaymentProcessingToManageBillingAndTransactions")}.</li>
              <li>
                {t("MarketingToProvidePersonalizedContentAndAdvertisements")}.
              </li>
              <li>{t("ImprovementOfServicesByAnalyzingUserTrends")}.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {t("SharingYourInformation")}
            </h2>
            <p className="mb-4">
              {t(
                "WeDoNotSellYourPersonalInformationHoweverWeMayShareYourDataWithTrustedPartnersUnderTheFollowingCircumstances"
              )}
            </p>
            <ul className="list-disc list-inside pl-5">
              <li>
                <strong>{t("ThirdPartyServiceProviders")}:</strong>{" "}
                {t(
                  "WeWorkWithServiceProvidersIncludingCloudStorageProvidersLikeAwsPaymentProcessorsLikeStripeOrPaypalAndAnalyticsProvidersLikeGoogleAnalyticsAndHotjar"
                )}
              </li>
              <li>
                <strong>{t("LegalObligations")}:</strong>{" "}
                {t(
                  "WeMayDiscloseYourPersonalInformationIfRequiredToComplyWithApplicableLawsRegulationsOrLegalProcesses"
                )}
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("DataSecurity")}</h2>
            <p className="mb-4">
              {t(
                "WeImplementRobustSecurityMeasuresToProtectYourPersonalDataIncludingEncryptionSecureDataStorageProtocolsAndRestrictedAccessHoweverNoMethodOfTransmissionOverTheInternetIs100Secure"
              )}
              .
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {t("YourDataRights")}
            </h2>
            <p className="mb-4">
              {t("YouHaveTheFollowingRightsRegardingYourPersonalInformation")}
            </p>
            <ul className="list-disc list-inside pl-5">
              <li>
                {t("AccessAndCorrectionRequestAccessToAndCorrectionOfYourData")}
                .
              </li>
              <li>
                {t(
                  "DataPortabilityRequestACopyOfYourDataInAMachineReadableFormat"
                )}
                .
              </li>
              <li>{t("ErasureRequestTheDeletionOfYourData")}.</li>
              <li>
                {t(
                  "ObjectionObjectToCertainTypesOfProcessingIncludingMarketing"
                )}
                .
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {t("ChildrensPrivacy")}
            </h2>
            <p className="mb-4">
              {t(
                "WeDoNotKnowinglyCollectDataFromIndividualsUnder18IfWeBecomeAwareOfSuchCollectionWeWillDeleteTheDataImmediately"
              )}
              .
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {t("InternationalDataTransfers")}
            </h2>
            <p className="mb-4">
              {t(
                "YourPersonalDataMayBeTransferredToServersLocatedOutsideYourCountryWeEnsureThatSuchTransfersAreConductedSecurelyAndInAccordanceWithApplicableLaws"
              )}
              .
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("DataRetention")}</h2>
            <p className="mb-4">
              {t(
                "WeRetainYourDataOnlyForAsLongAsNecessaryToFulfillThePurposesOutlinedInThisPolicyOrAsRequiredByLawAfterwardYourDataWillBeSecurelyDeleted"
              )}
              .
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {t("ThirdPartyLinks")}
            </h2>
            <p className="mb-4">
              {t(
                "OurWebsiteMayContainLinksToThirdPartyWebsitesWeAreNotResponsibleForTheirContentOrPrivacyPracticesWeEncourageYouToReviewTheirPrivacyPolicies"
              )}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {t("ChangesToThisPrivacyPolicy")}
            </h2>
            <p className="mb-4">
              {t(
                "WeMayUpdateThisPrivacyPolicyFromTimeToTimeAnyChangesWillBePostedOnThisPageWithAnUpdatedEffectiveDateContinuedUseOfOurServicesAfterAnyChangesSignifiesYourAcceptanceOfTheUpdatedPolicy"
              )}
              .
            </p>
          </section>

          <section className="mt-8">
            <p>
              {t(
                "IfYouHaveAnyQuestionsOrConcernsAboutThisPrivacyPolicyPleaseContactUsAt"
              )}{" "}
              <a href="" className="text-blue-500 hover:underline">
                support@framecastai.com
              </a>
              .
            </p>
          </section>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
