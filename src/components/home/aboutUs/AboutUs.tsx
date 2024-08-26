import { useTranslation } from 'react-i18next';
import { animationConfig } from '../../../utils/animations';
import { AboutContainer, Div, H2, Img, P } from './styles';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <AboutContainer {...animationConfig}>
      <Img
        src="https://dryeffect.com/wp-content/uploads/2021/09/iStock-858309414-scaled.jpg"
        alt=""
      />
      <Div>
        <H2>{t('about')}</H2>
        <P>{t('about.description1')}</P>
      </Div>
    </AboutContainer>
  );
}
