import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import {
  usePagination,
  useProductFilter,
  useSearch,
  useShowFilter,
} from '../../hooks';
import { Aside, ProductSidebar, SearchFilterToggle } from '../../components';
import { Main, Wrapper } from './styles';

const data = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
];

export default function ProductsPage() {
  const productsData = useLoaderData() as typeof data;
  const [isGridView, setIsGridView] = useState(true);

  const { searchText, debouncedSearchText, handleSearchChange } = useSearch();
  const { currentPage, handlePageChange } = usePagination();
  const { showFilter, toggleShowFilter } = useShowFilter();

  const { filteredProducts, filters, handleFilterChange, handleClearFilters } =
    useProductFilter(productsData, debouncedSearchText);

  const toggleView = () => setIsGridView(!isGridView);

  return (
    <Main>
      <SearchFilterToggle
        searchText={searchText}
        handleSearchChange={handleSearchChange}
        toggleView={toggleView}
        isGridView={isGridView}
        toggleShowFilter={toggleShowFilter}
      />
      <Wrapper>
        <Aside
          toggleShowFilter={toggleShowFilter}
          showFilter={showFilter}
          filters={filters}
          onFilterChange={handleFilterChange}
          handleClearFilters={handleClearFilters}
        />
        <ProductSidebar
          isGridView={isGridView}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          products={filteredProducts}
        />
      </Wrapper>
    </Main>
  );
}
