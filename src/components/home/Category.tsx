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
        <li>Fridge</li>
        <li>სამშენებლო</li>
        <li>სატვირთო</li>
        <li>მისაბმელიანი</li>
        <li>ზამთრის ტექნიკა</li>
        <li>წყლის ტრანსპორტი</li>
      </CategoryUl>
    </Container>
  );
}
