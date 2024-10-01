import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext<Product[]>([]);

import { ReactNode } from 'react';
import { Product } from '../interfaces';

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState([]);
  const API = process.env.REACT_APP_API;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${API}/test-product-route`);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, [API]);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
