import { useMediaQuery } from 'react-responsive';
import { animationConfig } from '../../../utils/animations';

import { Carousel } from '../..';
import { products } from './data';
import { Container } from './styles';

export default function NewProducts() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ maxWidth: 900 });
  return (
    <Container {...animationConfig}>
      <Carousel
        header='New Products'
        items={products}
        visibleItems={isMobile ? 1 : isTablet ? 2 : 3}
      />
    </Container>
  );
}
