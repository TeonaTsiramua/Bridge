import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import isPropValid from '@emotion/is-prop-valid';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './assets/translations/en.json';
import geTranslations from './assets/translations/ge.json';
import { StyleSheetManager } from 'styled-components';

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
const shouldForwardProp = (prop: string) =>
  isPropValid(prop) ||
  prop === 'animate' ||
  prop === 'initial' ||
  prop === 'exit' ||
  prop === 'variants' ||
  prop === 'whileHover' ||
  prop === 'whileTap' ||
  prop === 'whileInView' ||
  prop === 'viewport' ||
  prop === 'transition';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleSheetManager
      shouldForwardProp={shouldForwardProp}
      enableVendorPrefixes
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyleSheetManager>
  </React.StrictMode>
);
