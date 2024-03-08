import { useMediaQuery } from 'react-responsive';
import Carousel from './Carousel';
import { motion } from 'framer-motion';

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
        items={[
          {
            name: 'Name',
            description: 'description',
            info: 'info',
          },
          {
            name: 'Name',
            description: 'description',
            info: 'info',
          },
          {
            name: 'Name',
            description: 'description',
            info: 'info',
          },
          {
            name: 'Name',
            description: 'description',
            info: 'info',
          },
          {
            name: 'Name',
            description: 'description',
            info: 'info',
          },
          {
            name: 'Name',
            description: 'description',
            info: 'info',
          },
          {
            name: 'Name',
            description: 'description',
            info: 'info',
          },
        ]}
        visibleItems={isMobile ? 2 : isTablet ? 3 : 4}
      />
    </motion.div>
  );
}
