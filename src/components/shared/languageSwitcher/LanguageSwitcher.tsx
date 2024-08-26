import { useTranslation } from 'react-i18next';

import { clickAnimation } from '../../../utils/animations';
import { LangButton, Wrapper } from './styles';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Wrapper>
      <LangButton
        onClick={() => changeLanguage('en')}
        {...clickAnimation}
        src="/assets/main/gb.svg"
        alt="Great Britan flag"
      />
      <LangButton
        onClick={() => changeLanguage('ge')}
        {...clickAnimation}
        src="/assets/main/ge.svg"
        alt="Georgia flag"
      />
    </Wrapper>
  );
};

export default LanguageSwitcher;
