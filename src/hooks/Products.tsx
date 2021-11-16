import { createContext, useContext, useState, useCallback } from 'react';

import { api } from '../services/api';

interface IProducts {
  id: number;
  name: string;
  imageText: string;
  description: string;
  features: string[];
}

interface IProductsContextData {
  products: IProducts[];
  searchedProducts: IProducts[];
  handleFetchProducts: () => Promise<void>;
  handleSearchProducts: (productName: string) => Promise<void>;
}

const ProductsContext = createContext({} as IProductsContextData);

export const ProductsContextProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<IProducts[]>([]);

  const handleFetchProducts = useCallback(async () => {
    const response = await api.get('/products');
    setProducts(response.data);
  }, []);

  const handleSearchProducts = useCallback(async (productName: string) => {
    const response = await api.get(`/products?name=${productName}`);
    setSearchedProducts(response.data);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        searchedProducts,
        handleFetchProducts,
        handleSearchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): IProductsContextData => {
  const context = useContext(ProductsContext);

  return context;
};
