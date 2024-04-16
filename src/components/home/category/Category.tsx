import { motion } from 'framer-motion';
import { CategoryUl, Container } from './styles';
import { category } from './data';

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
        {category.map((i) => (
          <motion.li
            key={i.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={i.img} alt={i.name} />
            <p>{i.name}</p>
          </motion.li>
        ))}
      </CategoryUl>
    </Container>
  );
}
