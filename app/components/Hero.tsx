"use client";
import Link from "next/link";
import { MdOutlineCamera } from "react-icons/md";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/client";

const Hero = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section className="mt-14 md:pb-20 pb-10 bg-gradient-to-r from gray-00 to-gray-200 space-y-10">
      <div className="container mx-auto px-4 text-center">
        {/* First Div with Arrow */}
        <div className="relative inline-block">
          <div className="bg-blue-100 rounded-lg mb-5 text-sm md:text-md uppercase tracking-wider font-bold text-blue-500 inline-block px-4 py-2 relative z-10">
            {t("transformYourOnlinePresenceWithJustAClick")}
          </div>
          {/* Twisted Arrow */}
          <div className="absolute w-8 h-8 md:w-10 md:h-10 -top-8 md:-top-10 right-0 transform translate-x-[100%] translate-y-[10%] hidden md:block">
            <svg
              fill="rgb(37 99 235)"
              height="50px"
              width="50px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 302.816 302.816"
              xmlLang="preserve"
              stroke="rgb(37 99 235)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_6_"
                  d="M298.423,152.996c-5.857-5.858-15.354-5.858-21.213,0l-35.137,35.136 c-5.871-59.78-50.15-111.403-112.001-123.706c-45.526-9.055-92.479,5.005-125.596,37.612c-5.903,5.813-5.977,15.31-0.165,21.213 c5.813,5.903,15.31,5.977,21.212,0.164c26.029-25.628,62.923-36.679,98.695-29.565c48.865,9.72,83.772,50.677,88.07,97.978 l-38.835-38.835c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l62.485,62.485 c2.929,2.929,6.768,4.393,10.606,4.393s7.678-1.464,10.607-4.393l62.483-62.482C304.281,168.352,304.281,158.854,298.423,152.996z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        {/* Main Heading */}
        <div className="text-4xl md:text-7xl flex justify-center font-bold pb-4 md:pb-8 text-gradient bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent">
          {t("professionalAiHeadshotsInAMinute")}
        </div>
        <div className="text-center justify-center items-center flex">
          <p className="text-slate-700 text-lg md:text-2xl md:px-44 font-md tracking-wider max-w-6xl">
            {t("elevateYourOnlinePresenceWithHdHeadshotsGeneratedByOurAi.")}
            {t("idealForSocialProfilesResumesAndProfessionalPortfolios.")}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center pt-8">
          <Link href="/login">
            <button className="flex gap-2 md:gap-3 items-center text-center bg-blue-600 hover:bg-blue-500 font-medium text-white px-4 md:px-6 py-2 rounded-lg text-base md:text-lg transition transform motion-reduce:transition-none motion-reduce:hover:transform-none">
              {t("getYourHeadshots")}
              <MdOutlineCamera size={25} />
            </button>
          </Link>
        </div>
        <div className="pt-10">
          <video
            className="shadow-custom-shadow rounded-3xl"
            autoPlay
            muted
            loop
          >
            <source src="/content/hero-1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
