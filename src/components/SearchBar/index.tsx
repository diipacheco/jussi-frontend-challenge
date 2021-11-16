import React, { useCallback, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDebouncedCallback } from 'use-debounce';

import { useProducts } from '../../hooks/Products';

import { Container, ProductsList } from './styles';

const SearchBar: React.FC = () => {
  const [inputText, setInputText] = useState('');

  const { handleSearchProducts, searchedProducts } = useProducts();

  const debouncedFunction = useDebouncedCallback(
    useCallback((value: string) => {
      setInputText(value);
    }, []),
    1000,
    { maxWait: 1500 },
  );

  useEffect(() => {
    function handleDebounce() {
      if (inputText.length > 1) {
        handleSearchProducts(inputText);
      }
    }
    handleDebounce();
  }, [inputText, handleSearchProducts]);

  return (
    <Container>
      <input
        type="text"
        onChange={({ target }) => debouncedFunction(target.value)}
        placeholder="Buscar"
      />
      <BsSearch size={16} />
      {searchedProducts?.length >= 1 && (
        <ProductsList>
          <div className="title">
            <h4>Produtos</h4>
          </div>
          <ul>
            {searchedProducts?.map(product => (
              <li key={product.id}>
                <div className="product-name">{product.name}</div>
                <div className="product-description">{product.description}</div>
              </li>
            ))}
          </ul>
        </ProductsList>
      )}
    </Container>
  );
};

export default SearchBar;
