"use client";
import Head from "next/head";
import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useTranslation } from "@/app/i18n/client";

const ContactUs = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  return (
    <div className="flex-grow pb-6">
      <Head>
        <title>{t("Contact Us | Framecast AI")}</title>
        <meta
          name="description"
          content="Contact Us for Framecast AI, the AI headshot generator platform."
        />
      </Head>
      <main className="max-w-[80rem] mt-14 px-4 sm:px-6 lg:px-8 mx-auto text-justify">
        <h1 className="text-main text-6xl font-bold mx-auto mb-10 text-blue-600 tracking-wide lg:mb-14">
          {t("contactUs")}
        </h1>

        <section className="mb-6">
          <p className="mb-4">
            {t(
              "haveQuestionsOrNeedAssistance?We'reHereToHelp!FeelFreeToReachOutToUsByEmailAt"
            )}
            <a href="" className="text-blue-600">
              {" "}
              "support@framecastai.com"
            </a>
            .{" "}
            {t(
              "OurDedicatedTeamIsAvailableToAnswerYourInquiriesAndProvideSupport.ForGeneralInquiriesOrToRequestADemoPleaseContactUsViaEmail"
            )}
          </p>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
