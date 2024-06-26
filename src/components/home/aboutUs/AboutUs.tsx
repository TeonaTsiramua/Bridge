import { animationConfig } from '../../../utils/animations';
import { AboutContainer, Div, H2, Img, P } from './styles';

export default function AboutUs() {
  return (
    <AboutContainer {...animationConfig}>
      <Img
        src='https://dryeffect.com/wp-content/uploads/2021/09/iStock-858309414-scaled.jpg'
        alt=''
      />
      <Div>
        <H2>About Us</H2>
        <P>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </P>
      </Div>
    </AboutContainer>
  );
}
