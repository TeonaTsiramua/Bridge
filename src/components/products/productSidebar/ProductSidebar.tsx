import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Button, ProductCard } from '../..';
import { Container, Input, ProductWrapper, Wrapper } from './styles';
import { Pagination } from '@mui/material';
import ToggleButton from './ToggleButton';
import SearchIcon from './SearchIcon';

const data = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
];

const itemsPerPage = 18;

const ProductSidebar = ({
  toggleShowFilter,
}: {
  toggleShowFilter: () => void;
}) => {
  const products = useLoaderData() as typeof data;
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setisGridView] = useState(true);
  const navigate = useNavigate();
  const { page } = useParams(); // Access the page parameter from the URL
  const isTablet = useMediaQuery({ maxWidth: 900 });

  useEffect(() => {
    // Initialize the current page based on the page parameter in the URL
    setCurrentPage(page ? parseInt(page) : 1);
  }, [page]);

  const handlePageChange = (_: unknown, page: number) => {
    setCurrentPage(page);
    navigate(`/products/page/${page}`); // Navigate to the corresponding page URL
  };

  const toggleView = () => {
    setisGridView(!isGridView);
  };

  return (
    <Container>
      <Wrapper>
        {isTablet && <Button onClick={toggleShowFilter} content='Filter' />}
        <Input type='text' placeholder='Search...' />
        <SearchIcon />
        <ToggleButton toggleView={toggleView} isGridView={isGridView} />
      </Wrapper>
      <ProductWrapper $primary={isGridView}>
        {products
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((product) => (
            <ProductCard
              key={product.id}
              primary={isGridView}
              product={product}
            />
          ))}
      </ProductWrapper>
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
