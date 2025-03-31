import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALS } from './constants';
import { en } from './translations/en';
import { uk } from './translations/uk';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: LOCALS.EN,
    interpolation: { escapeValue: false },
    resources: {
      en,
      uk,
    },
  });

export default i18n;
