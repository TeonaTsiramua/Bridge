import { motion } from 'framer-motion';
import { CategoryUl, Container, H2, Img, Li, P } from './styles';
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
      <H2>Product Category</H2>

      <CategoryUl>
        {category.map((i) => (
          <Li
            as={motion.li}
            key={i.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Img src={i.img} alt={i.name} />
            <P>{i.name}</P>
          </Li>
        ))}
      </CategoryUl>
    </Container>
  );
}
