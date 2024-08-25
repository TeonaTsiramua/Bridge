import { createContext, ReactNode } from 'react';
import { useProductFilter } from '../hooks';
import { FilterContextType, Product } from '../interfaces';

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export const FilterProvider = ({
  children,
  products,
}: {
  children: ReactNode;
  products: Product[];
}) => {
  const {
    filteredProducts,
    filters,
    setFilters,
    handleFilterChange,
    handleClearFilters,
    searchText,
    handleSearchChange,
  } = useProductFilter(products);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        filteredProducts,
        handleFilterChange,
        handleClearFilters,
        searchText,
        handleSearchChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
