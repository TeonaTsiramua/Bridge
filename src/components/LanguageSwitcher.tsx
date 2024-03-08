import React from 'react';
import { useTranslation } from 'react-i18next';
import ge from '../assets/ge.svg';
import gb from '../assets/gb.svg';
import { LangButton } from '../styles/HeaderStyles';
import { motion } from 'framer-motion';

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
          src={gb}
          alt='Great Britan flag'
        />
      </LangButton>
      <LangButton onClick={() => changeLanguage('ge')}>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src={ge}
          alt='Georgia flag'
        />
      </LangButton>
    </>
  );
};

export default LanguageSwitcher;
