import { motion } from 'framer-motion';
import { Container, Img } from './styles';

const Posts = () => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Img src='/assets/posts/post1.jpg' alt='' />
      <Img src='/assets/posts/post2.jpg' alt='' />
    </Container>
  );
};
export default Posts;
