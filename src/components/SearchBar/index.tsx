import React from 'react';
import { BsSearch } from 'react-icons/bs';

import { Container } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Buscar" />
      <BsSearch size={16} />
    </Container>
  );
};

export default SearchBar;
