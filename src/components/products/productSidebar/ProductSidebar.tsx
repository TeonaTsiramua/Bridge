import React, { useEffect, useState } from 'react';
import { useFilterContext } from '../../../hooks';
import { ProductCard } from '../..';
import { Pagination, CircularProgress } from '@mui/material';
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
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(filteredProducts);

  useEffect(() => {
    setLoading(true);
    setProducts(filteredProducts);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [filteredProducts]);

  return (
    <Container>
      {loading ? (
        <CircularProgress
          sx={{
            color: 'hsl(var(--clr-blue))',
            margin: '2rem 0',
          }}
        />
      ) : (
        <>
          <ProductWrapper
            $primary={isGridView}
            $onlyOne={products.length === 1}
          >
            {products
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
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
        </>
      )}
    </Container>
  );
};

export default ProductSidebar;
