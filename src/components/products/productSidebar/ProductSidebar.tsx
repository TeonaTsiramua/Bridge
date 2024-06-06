import { ProductCard } from '../..';
import { Container, ProductWrapper } from './styles';
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

const itemsPerPage = 18;

const ProductSidebar = ({
  isGridView,
  handlePageChange,
  currentPage,
  products,
}: {
  isGridView: boolean;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  currentPage: number;
  products: typeof data;
}) => {
  return (
    <Container>
      <ProductWrapper $primary={isGridView}>
        {products &&
          products
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((product) => (
              <ProductCard
                key={product.id}
                primary={isGridView}
                product={product}
              />
            ))}
      </ProductWrapper>
      {
        // Only show pagination if there are more than one page of products
        products.length > itemsPerPage && (
          <Pagination
            count={Math.ceil(products.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color='primary'
          />
        )
      }
      {products.length === 0 && <div>No products found.</div>}
    </Container>
  );
};

export default ProductSidebar;
