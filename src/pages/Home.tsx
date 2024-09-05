import { motion } from 'framer-motion';
import { AboutUs, Category, Hero, NewProducts, OrderUs } from '../components';
import { opacityAnimation } from '../utils/animations';
import { Main } from '../styles/MainStyles';

function Home() {
  return (
    <Main as={motion.main} {...opacityAnimation(0.5)}>
      <Hero />
      <Category />
      <AboutUs />
      <NewProducts />
      <OrderUs />
    </Main>
  );
}

export default Home;
