"use client";
import React from "react";
import Head from "next/head";
import { useTranslation } from "@/app/i18n/client";
import { useLanguage } from "@/app/contexts/LanguageContext";

const Refund: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  return (
    <div className="flex-grow pb-6">
      <Head>
        <title>{t("Refund Policy | Framecast AI")}</title>
        <meta
          name="description"
          content="Refund policy for the AI headshot generator service by Framecast AI."
        />
      </Head>
      <main className="max-w-[80rem] mt-14 px-4 sm:px-6 lg:px-8 mx-auto">
        <h1 className="text-main text-6xl font-bold mx-auto mb-10 text-blue-600 tracking-wide lg:mb-14">
          {t("refundPolicy")}
        </h1>
        <p className="mb-4 text-justify">
          {t("ThankYouForChoosingOur")}{" "}
          <a href="https://framecast-ai.vercel.app" className="text-blue-600">
            {" "}
            {t("AiHeadshotGenerator")}{" "}
          </a>{" "}
          {t(
            "ServiceWeStriveToProvideTheBestExperienceForOurUsersPleaseReviewOurRefundPolicyBelowToUnderstandTheCircumstancesUnderWhichRefundsMayBeIssued"
          )}
        </p>

        <section className="mb-6 text-justify">
          <h2 className="text-xl font-semibold mb-2">
            {t("1RefundScenarios")}
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>{t("TechnicalIssuesOrErrors")}</strong>:{" "}
              {t(
                "IfYouEncounterTechnicalProblemsThatPreventYouFromReceivingOurServiceSuchAsTheAiFailingToGenerateHeadshotsOrProducingUnusableResultsYouMayBeEligibleForARefund"
              )}
              .
            </li>
            <li>
              <strong>{t("ServiceNotDelivered")}</strong>:{" "}
              {t(
                "IfYouHavePaidForHeadshotsButDidNotReceiveThemYouAreEntitledToARefund"
              )}
              .
            </li>
            <li>
              <strong>{t("DuplicateCharges")}</strong>:{" "}
              {t(
                "IfYouAreAccidentallyChargedMoreThanOnceForTheSameServiceWeWillIssueARefundForTheDuplicateCharge"
              )}
              .
            </li>
            <li>
              <strong>{t("UnsatisfactoryResults")}</strong>:{" "}
              {t(
                "RefundsForDissatisfactionWithTheQualityOfHeadshotsAreHandledOnACaseByCaseBasisAsTheOutputIsSubjectivePleaseContactUsToDiscussYourConcerns"
              )}
              .
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {t("2RefundTimeframe")}
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>{t("RequestPeriod")}</strong>:{" "}
              {t("YouMayRequestARefundWithin7DaysOfYourPurchase")}.
            </li>
            <li>
              <strong>{t("ProcessingTime")}</strong>:{" "}
              {t(
                "OnceARefundIsApprovedItWillBeProcessedWithin3To7BusinessDaysPleaseAllowAdditionalTimeForTheRefundToReflectInYourAccount"
              )}
              .
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {t("3ConditionsForRefunds")}
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>{t("OriginalPaymentMethod")}</strong>:{" "}
              {t(
                "RefundsWillBeIssuedToTheOriginalPaymentMethodUsedForThePurchase"
              )}
              .
            </li>
            <li>
              <strong>{t("PartialRefunds")}</strong>:{" "}
              {t(
                "PartialRefundsMayBeOfferedIfPartOfTheServiceHasBeenDeliveredOrUsed"
              )}
              .
            </li>
            <li>
              <strong>{t("NonRefundableSituations")}</strong>:{" "}
              <ul className="list-disc list-inside pl-5 mt-2">
                <li>{t("ChangesOfMindAfterTheServiceHasBeenDelivered")}.</li>
                <li>{t("RefundRequestsMadeOutsideThe7DayRequestPeriod")}.</li>
                <li>
                  {t(
                    "IssuesBeyondOurControlSuchAsDissatisfactionDueToUnrealisticExpectationsOrFailureToFollowGuidelinesForUploadingPhotos"
                  )}
                  .
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {t("4HandlingAbusiveRefundRequests")}
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>{t("FraudPrevention")}</strong>:{" "}
              {t(
                "ToPreventMisuseOfOurRefundPolicyWeMayLimitTheNumberOfRefundRequestsPerUser"
              )}
              .
            </li>
            <li>
              <strong>{t("CaseByCaseBasis")}</strong>:{" "}
              {t(
                "SubjectiveDissatisfactionWillBeEvaluatedIndividuallyToDetermineIfARefundIsJustified"
              )}
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            {t("5AlternativeSolutions")}
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>{t("FreeRedos")}</strong>:{" "}
              {t(
                "IfYouAreUnhappyWithTheInitialHeadshotsWeOfferFreeRedosToEnsureYouReceiveAResultYouAreSatisfiedWith"
              )}
              .
            </li>
            <li>
              <strong>{t("DiscountsOrCredits")}</strong>:{" "}
              {t(
                "AsAnAlternativeToAFullRefundWeMayOfferADiscountOrCreditTowardsFutureServicesIfYouHaveUsedPartOfTheService"
              )}
              .
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <p>
            {t("IfYouHaveAnyQuestionsOrNeedToRequestARefundPlease")}{" "}
            <a href="" className="text-blue-600">
              {" "}
              {t("contact")}{" "}
            </a>{" "}
            {t("OurSupportTeamAt")}{" "}
            <a href="" className="text-blue-500 hover:underline">
              support@framecastai.com
            </a>
            . {t("WeAreHereToAssistYou")}
          </p>
        </section>
      </main>
    </div>
  );
};

export default Refund;
