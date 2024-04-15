import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { LangButton } from '../styles/HeaderStyles';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <LangButton onClick={() => changeLanguage('en')}>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src='/assets/main/gb.svg'
          alt='Great Britan flag'
        />
      </LangButton>
      <LangButton onClick={() => changeLanguage('ge')}>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src='/assets/main/ge.svg'
          alt='Georgia flag'
        />
      </LangButton>
    </>
  );
};

export default LanguageSwitcher;
