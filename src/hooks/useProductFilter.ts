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

const useProductFilter = (products = data, searchText = '') => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (searchText) {
      const fuse = new Fuse(products, {
        keys: ['title'],
        threshold: 0.3,
      });
      const result = fuse.search(searchText).map((r) => r.item);
      setFilteredProducts(result);
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchText]);

  return filteredProducts;
};

export default useProductFilter;
