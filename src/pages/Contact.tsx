import { AboutUs, ContactUs, Posts, Services } from '../components';
import { CMain } from '../styles/MainStyles';

function Contact() {
  return (
    <CMain>
      <Posts />
      <AboutUs />
      <Services />
      <ContactUs />
    </CMain>
  );
}

export default Contact;
