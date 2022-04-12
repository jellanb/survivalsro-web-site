import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';
import { COOKIE_LANGUAGE_KEY } from './constants';

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

const lng = localStorage.getItem(COOKIE_LANGUAGE_KEY);

i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false // react already safes from xss
  },
  lng,
  resources
});

export default i18n;
