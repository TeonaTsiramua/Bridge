import { opacityAnimation, textAnimation } from '../../../utils/animations';
import { H1, H2, HeroImg, HeroText, P } from './styles';

export default function Hero() {
  return (
    <div>
      <HeroImg {...opacityAnimation} src='/assets/main/bg-4.jpg' alt='hero' />
      <HeroText>
        <H1 {...textAnimation} transition={{ delay: 0.5 }}>
          BRIDGE
        </H1>
        <H2 {...textAnimation} transition={{ delay: 1 }}>
          Global Vehicle Trader
        </H2>
        <P {...textAnimation} transition={{ delay: 2 }}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </P>
      </HeroText>
    </div>
  );
}
