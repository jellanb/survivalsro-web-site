import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';

const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  },
  tr: {
    translation: translationTR
  }
};

i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false // react already safes from xss
  },
  lng: 'es',
  resources
});

export default i18n;
