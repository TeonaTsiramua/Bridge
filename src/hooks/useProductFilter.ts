import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

const data = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
];

const initialFilters = {
  albumId: null,
  id: null,
};

const useProductFilter = (products = data, searchText = '') => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState<{
    albumId: number | null;
    id: number | null;
  }>(initialFilters);

  useEffect(() => {
    let filtered = products;

    if (searchText) {
      const fuse = new Fuse(filtered, {
        keys: ['title'],
        threshold: 0.3,
      });
      filtered = fuse.search(searchText).map((r) => r.item);
    }

    // Apply albumId and id filters
    if (filters.albumId !== null) {
      filtered = filtered.filter(
        (product) => product.albumId === filters.albumId
      );
    }
    if (filters.id !== null) {
      filtered = filtered.filter((product) => product.id === filters.id);
    }

    setFilteredProducts(filtered);
  }, [products, searchText, filters]);

  const handleFilterChange = (filterName: string, value: number | null) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
  };

  return { filteredProducts, filters, handleFilterChange, handleClearFilters };
};

export default useProductFilter;
