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
            name: 'Name 1',
            description: 'description 1',
            info: 'info 1',
          },
          {
            name: 'Name 2',
            description: 'description 2',
            info: 'info 2',
          },
          {
            name: 'Name 3',
            description: 'description 3',
            info: 'info 3',
          },
          {
            name: 'Name 4',
            description: 'description 4',
            info: 'info 4',
          },
          {
            name: 'Name 5',
            description: 'description 5',
            info: 'info 5',
          },
          {
            name: 'Name 6',
            description: 'description 6',
            info: 'info 6',
          },
          {
            name: 'Name 7',
            description: 'description 7',
            info: 'info 7',
          },
        ]}
        visibleItems={isMobile ? 1 : isTablet ? 2 : 3}
      />
    </motion.div>
  );
}
