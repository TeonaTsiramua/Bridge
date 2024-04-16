import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import { Carousel } from '../..';
import { products } from './data';

export default function NewProducts() {
  const isMobile = useMediaQuery({ maxWidth: 430 });
  const isTablet = useMediaQuery({ maxWidth: 768 });
  return (
    <motion.div
      initial={{ y: '30%' }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Carousel
        header='New Products'
        items={products}
        visibleItems={isMobile ? 1 : isTablet ? 2 : 3}
      />
    </motion.div>
  );
}
