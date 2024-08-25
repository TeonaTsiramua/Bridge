import { ProductCard } from '../..';
import { useFilterContext } from '../../../hooks';
import { Pagination } from '@mui/material';
import { Container, ProductWrapper } from './styles';

const itemsPerPage = 18;

const ProductSidebar = ({
  isGridView,
  handlePageChange,
  currentPage,
}: {
  isGridView: boolean;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  currentPage: number;
}) => {
  const { filteredProducts } = useFilterContext();
  return (
    <Container>
      <ProductWrapper $primary={isGridView}>
        {filteredProducts
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
        filteredProducts.length > itemsPerPage && (
          <Pagination
            count={Math.ceil(filteredProducts.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        )
      }
      {filteredProducts.length === 0 && <div>No products found.</div>}
    </Container>
  );
};

export default ProductSidebar;
