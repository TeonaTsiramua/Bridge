import { opacityAnimation } from '../../../utils/animations';
import { Container, Img } from './styles';

const Posts = () => {
  return (
    <Container>
      <Img {...opacityAnimation} src='/assets/posts/post1.jpg' alt='post' />
      <Img {...opacityAnimation} src='/assets/posts/post2.jpg' alt='post' />
    </Container>
  );
};
export default Posts;
