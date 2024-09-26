import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { animationConfig } from '../../../utils/animations';
import { AboutContainer, Div, H2, Img, P } from './styles';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <AboutContainer {...animationConfig}>
      <Img src='/assets/main/bridge.png' alt='bridge logo' />
      <Div>
        <H2>{t('about')}</H2>
        <P>
          {t('about.description1')} <br />
          <span>
            <Link to='/contact'>სრულად ნახვა...</Link>
          </span>
        </P>
      </Div>
    </AboutContainer>
  );
}
