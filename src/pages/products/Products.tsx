import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FilterProvider } from '../../context/FilterContext';
import { usePagination, useShowFilter } from '../../hooks';
import { Product } from '../../interfaces';
import { Aside, ProductSidebar, SearchFilterToggle } from '../../components';
import { Main, Wrapper } from './styles';

export default function ProductsPage() {
  const productsData = useLoaderData() as Product[];
  const [isGridView, setIsGridView] = useState(true);
  const { currentPage, handlePageChange } = usePagination();
  const { showFilter, toggleShowFilter } = useShowFilter();

  const toggleView = () => setIsGridView(!isGridView);

  return (
    <FilterProvider products={productsData}>
      <Main>
        <SearchFilterToggle
          toggleView={toggleView}
          isGridView={isGridView}
          toggleShowFilter={toggleShowFilter}
        />
        <Wrapper>
          <Aside
            toggleShowFilter={toggleShowFilter}
            showFilter={showFilter}
            products={productsData}
          />
          <ProductSidebar
            isGridView={isGridView}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </Wrapper>
      </Main>
    </FilterProvider>
  );
}
