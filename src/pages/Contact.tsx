import { motion } from 'framer-motion';
import { About, ContactUs, Services } from '../components';
import { opacityAnimation } from '../utils/animations';
import { CMain } from '../styles/MainStyles';

function Contact() {
  return (
    <CMain as={motion.main} {...opacityAnimation(0.5)}>
      <About />
      <Services />
      <ContactUs />
    </CMain>
  );
}

export default Contact;
