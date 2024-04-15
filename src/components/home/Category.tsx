import { motion } from 'framer-motion';
import { CategoryUl, Container } from '../../styles/MainStyles';

export default function Category() {
  return (
    <Container
      as={motion.div}
      initial={{ y: '100%' }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Product Category</h2>
      <CategoryUl>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src='/assets/category/refrigerator.png' alt='refrigerator' />
          <p>მაცივარი</p>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src='/assets/category/concrete-mixer.png' alt='' />
          <p>სამშენებლო</p>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src='/assets/category/truck.png' alt='' />
          <p>სატვირთო</p>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src='/assets/category/trailer.png' alt='' />
          <p>მისაბმელიანი</p>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src='/assets/category/snowmobile.png' alt='' />
          <p>ზამთრის ტექნიკა</p>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src='/assets/category/jet-ski.png' alt='' />
          <p>წყლის ტრანსპორტი</p>
        </motion.li>
      </CategoryUl>
    </Container>
  );
}
