import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Button, ProductCard } from '../..';
import { Container, Input, Wrapper } from './styles';
import { Pagination } from '@mui/material';

const data = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
];

const itemsPerPage = 15;

const ProductSidebar = ({
  toggleShowFilter,
}: {
  toggleShowFilter: () => void;
}) => {
  const products = useLoaderData() as typeof data;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { page } = useParams(); // Access the page parameter from the URL
  const isTablet = useMediaQuery({ maxWidth: 900 });

  useEffect(() => {
    // Initialize the current page based on the page parameter in the URL
    setCurrentPage(page ? parseInt(page) : 1);
  }, [page]);

  const handlePageChange = (_: unknown, page: number) => {
    setCurrentPage(page);
    navigate(`/products/${page}`); // Navigate to the corresponding page URL

    // Scroll to the beginning of the page when navigating to the next page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <Wrapper>
        {isTablet && <Button onClick={toggleShowFilter} content='Filter' />}
        <Input type='text' placeholder='Search...' />
      </Wrapper>
      {products
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      <Pagination
        count={Math.ceil(products.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color='primary'
      />
    </Container>
  );
};

export default ProductSidebar;
