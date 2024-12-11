"use client";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/client";

const Pricing = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-center my-20"
    >
      <h2
        className="px-4 sm:px-10 text-4xl sm:text-5xl md:text-7xl text-center font-bold pb-4 text-gradient bg-gradient-to-l
         from-blue-600 to-blue-200
        max-w-4xl bg-clip-text text-transparent"
      >
        {t("premiumQualityWithoutThePremiumPrice.")}
      </h2>
      <p
        className="px-4 text-center text-xl sm:text-2xl font-medium text-slate-700 mt-4 max-w-4xl 
      tracking-wider"
      >
        {t("updateYourLinkedInProfilePictureBoostYourJobApplicationRate")}
        {t("orUpgradeYourCompanysWebsiteWithOurTailoredAiHeadshotPlans.")}
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:gap-6 mt-16 mb-12">
        {/* Starter Plan */}
        <div className="relative mx-auto w-[95%] sm:h-full sm:w-full max-w-lg rounded-lg border bg-white p-12 border-black/[0.08]">
          <div className="flex h-full flex-col px-6">
            <div className="uppercase text-center tracking-wider mb-1 text-base text-black/50">
              {t("starter")}
            </div>
            <div className="flex flex-col text-center text-[4rem] font-extrabold leading-none tracking-tight lg:text-[4.5rem]">
              <span className="line-through text-[2.5rem] opacity-20">$39</span>
              <span className="mt-1">$12</span>
            </div>
            <ul className="flex-grow flex flex-col gap-3 pt-9 pb-10">
              <li className="text-black/70">
                📸 <b>16</b>
                {t("highQualityHeadshots")}
              </li>
              <li className="text-black/70">
                ⏱️ <b>2</b>
                {t("-hourProcessingTime")}
              </li>
              <li className="text-black/70">
                👕 <b>Multiple</b>
                {t("outfitsAndBackgrounds")}
              </li>
              <li className="text-black/70">
                🕺 <b>1</b>
                {t("credit")}
              </li>
            </ul>
            <div className="flex justify-center">
              <Link href="/login">
                <button className="flex w-[250px] justify-center items-center bg-blue-600 hover:bg-blue-500 font-medium text-white px-14 py-3 rounded-xl text-lg transition tracking-wider">
                  {t("buyStarter")}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Basic Plan */}
        <div className="relative mx-auto w-[95%] sm:h-full sm:w-full max-w-lg rounded-lg p-[2px] bg-gradient-to-l from-blue-600 to-blue-200">
          <div className="flex flex-col h-full w-full rounded-lg bg-white p-12">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500 bg-white px-4 py-1 text-sm font-semibold shadow-md">
              <span className="text-gradient bg-gradient-to-l from-blue-600 to-blue-200 bg-clip-text text-transparent">
                {t("90%pickThisPlan")}
              </span>
            </div>
            <div className="flex h-full flex-col">
              <div className="uppercase text-center tracking-wider mb-1 text-base text-black/50">
                {t("basic")}
              </div>
              <div className="flex flex-col text-center text-[4rem] font-extrabold leading-none tracking-tight lg:text-[4.5rem]">
                <span className="line-through text-[2.5rem] opacity-20">
                  $59
                </span>
                <span className="mt-1 text-gradient bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent">
                  $30
                </span>
              </div>
              <ul className="flex-grow flex flex-col gap-3 pt-9 pb-10">
                <li className="text-black/70">
                  📸 <b>48</b>
                  {t("highQualityHeadshots")}
                </li>
                <li className="text-black/70">
                  ⏱️ <b>1</b>
                  {t("-hourProcessingTime")}
                </li>
                <li className="text-black/70">
                  👕 <b>Multiple</b>
                  {t("outfitsAndBackgrounds")}
                </li>
                <li className="text-black/70">
                  🕺 <b>3</b>
                  {t("credit")}
                </li>
              </ul>
              <div className="flex justify-center">
                <Link href="/login">
                  <button className="flex w-[250px] justify-center items-center bg-gradient-to-l from-blue-600 to-blue-200  hover:from-blue-300 hover:to-blue-700 font-medium text-white px-14 py-3 rounded-xl text-lg transition tracking-wider">
                    {t("buyBasic")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="relative mx-auto w-[95%] sm:h-full sm:w-full max-w-lg rounded-lg border bg-white p-12 border-black/[0.08]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-white px-4 py-1 text-sm shadow-md font-semibold border-black/[0.08]">
            <span className="text-slate-600">{t("bestValue")}</span>
          </div>
          <div className="flex h-full flex-col">
            <div className="uppercase text-center tracking-wider mb-1 text-base text-black/50">
              {t("premium")}
            </div>
            <div className="flex flex-col text-center text-[4rem] font-extrabold leading-none tracking-tight lg:text-[4.5rem]">
              <span className="line-through text-[2.5rem] opacity-20">$99</span>
              <span className="mt-1">$40</span>
            </div>
            <ul className="flex-grow flex flex-col gap-3 pt-9 pb-10">
              <li className="text-black/70">
                📸 <b>80</b>
                {t("highQualityHeadshots")}
              </li>
              <li className="text-black/70">
                ⏱️ <b>30</b>
                {t("-minProcessingTime")}
              </li>
              <li className="text-black/70">
                👕 <b>Multiple</b>
                {t("outfitsAndBackgrounds")}
              </li>
              <li className="text-black/70">
                🕺 <b>5</b>
                {t("credit")}
              </li>
            </ul>
            <div className="flex justify-center">
              <Link href="/login">
                <button className="flex w-[250px] justify-center items-center bg-blue-600 hover:bg-blue-500 font-medium text-white px-14 py-3 rounded-xl text-lg transition tracking-wider">
                  {t("buyPremium")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
