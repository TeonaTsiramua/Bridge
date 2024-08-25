import { animationConfig, clickAnimation } from '../../../utils/animations';
import { CategoryUl, Container, H2, Img, Li, P } from './styles';
import { category } from './data';

export default function Category() {
  return (
    <Container {...animationConfig}>
      <H2>Product Category</H2>

      <CategoryUl>
        {category.map((i) => (
          <Li key={i.name} to={i.link || ''} {...clickAnimation}>
            <Img src={i.img} alt={i.name} />
            <P>{i.name}</P>
          </Li>
        ))}
      </CategoryUl>
    </Container>
  );
}
