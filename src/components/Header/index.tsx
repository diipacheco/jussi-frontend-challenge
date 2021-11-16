import React, { useState, useCallback, useEffect } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { useDebouncedCallback } from 'use-debounce';

import { useProducts } from '../../hooks/Products';
import logo from '../../assets/logoJussiVectorGreen.svg';

import SearchBar from '../SearchBar';

import { Container, Content, Menu, ProfileContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Jüssi Logo" />
      <Content>
        <Menu>
          <ul>
            <li>
              <a href="/solucoes">Nossas Soluções</a>
            </li>
            <li>
              <a href="/sobre-nos">Conheça a Jüssi</a>
            </li>
          </ul>
        </Menu>
        <ProfileContainer>
          <SearchBar />
          <a href="/login">Login</a>
          <CgShoppingCart size={32} />
        </ProfileContainer>
      </Content>
    </Container>
  );
};

export default Header;
