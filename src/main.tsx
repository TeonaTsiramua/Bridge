import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './assets/translations/en.json';
import geTranslations from './assets/translations/ge.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ge: { translation: geTranslations },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
