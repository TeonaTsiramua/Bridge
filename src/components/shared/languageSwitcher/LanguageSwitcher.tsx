import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { clickAnimation } from '../../../utils/animations';
import { LangButton } from './styles';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <LangButton onClick={() => changeLanguage('en')}>
        <motion.img
          {...clickAnimation}
          src='/assets/main/gb.svg'
          alt='Great Britan flag'
        />
      </LangButton>
      <LangButton onClick={() => changeLanguage('ge')}>
        <motion.img
          {...clickAnimation}
          src='/assets/main/ge.svg'
          alt='Georgia flag'
        />
      </LangButton>
    </>
  );
};

export default LanguageSwitcher;
