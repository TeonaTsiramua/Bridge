import { useTranslation } from 'react-i18next';
import { opacityAnimation, textAnimation } from '../../../utils/animations';
import { H1, H2, HeroImg, HeroText, P, Wrapper } from './styles';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <HeroImg {...opacityAnimation()} src="/assets/main/bg-4.jpg" alt="hero" />
      <HeroText>
        <H1 {...textAnimation(0.5)}>{t('home.title')}</H1>
        <H2 {...textAnimation(1)}>{t('home.subtitle')}</H2>
        <P {...textAnimation(2)}>{t('home.slogan')}</P>
      </HeroText>
    </Wrapper>
  );
}
