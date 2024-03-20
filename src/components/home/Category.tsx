import { motion } from 'framer-motion';
import { CategoryUl, Container } from '../../styles/MainStyles';
import crane from '../../assets/category/concrete-mixer.png';
import trailer from '../../assets/category/trailer.png';
import refrigerator from '../../assets/category/refrigerator.png';
import truck from '../../assets/category/truck.png';
import snowmobile from '../../assets/category/snowmobile.png';
import jet from '../../assets/category/jet-ski.png';

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
          <img src={refrigerator} alt='' />
          <p>მაცივარი</p>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src={crane} alt='' />
          <p>სამშენებლო</p>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src={truck} alt='' />
          <p>სატვირთო</p>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src={trailer} alt='' />
          <p>მისაბმელიანი</p>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src={snowmobile} alt='' />
          <p>ზამთრის ტექნიკა</p>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src={jet} alt='' />
          <p>წყლის ტრანსპორტი</p>
        </motion.li>
      </CategoryUl>
    </Container>
  );
}
