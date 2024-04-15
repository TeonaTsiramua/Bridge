import { motion } from 'framer-motion';
import { AboutContainer } from './styles';

export default function AboutUs() {
  return (
    <AboutContainer
      as={motion.div}
      initial={{ y: '30%' }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <img
        src='https://dryeffect.com/wp-content/uploads/2021/09/iStock-858309414-scaled.jpg'
        alt=''
      />
      <div>
        <h2>About Us</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </AboutContainer>
  );
}
