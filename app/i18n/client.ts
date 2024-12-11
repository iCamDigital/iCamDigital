"use client";

import i18next from "i18next";
import { useEffect } from "react";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { useLanguage } from "../contexts/LanguageContext";
import { getOptions, languages } from "./settings";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined,
    preload: languages,
  });

export function useTranslation(
  ns?: string,
  options: { keyPrefix?: string } = {}
) {
  const { language } = useLanguage();
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return ret;
}
