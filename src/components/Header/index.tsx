import React from 'react';

import logo from '../../assets/logoJussiVectorGreen.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Jüssi Logo" />
    </Container>
  );
};

export default Header;
