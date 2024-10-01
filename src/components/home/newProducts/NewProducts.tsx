import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { animationConfig } from '../../../utils/animations';

import { Carousel } from '../..';
import { Container } from './styles';
import { Product } from '../../../interfaces';
import { useProducts } from '../../../context/ProductContext';

const NewProducts = () => {
  const products = useProducts() as Product[];
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ maxWidth: 900 });
  const { t } = useTranslation();

  const sortedProducts = [...products].reverse().slice(0, 8);

  return (
    <Container {...animationConfig}>
      <Carousel
        header={t('home.newProducts')}
        items={sortedProducts}
        visibleItems={isMobile ? 1 : isTablet ? 2 : 3}
      />
    </Container>
  );
};

export default NewProducts;
