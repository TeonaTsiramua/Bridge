import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ProductCard } from '../..';
import { Container, Input } from './style';

const data = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
];

const ProductSidebar = () => {
  const products = useLoaderData() as typeof data;
  const [visibleProducts, setVisibleProducts] = useState(20);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 20);
  };

  return (
    <Container>
      <Input type='text' placeholder='Search...' />
      {products.slice(0, visibleProducts).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {visibleProducts < products.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </Container>
  );
};

export default ProductSidebar;
