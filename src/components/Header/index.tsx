import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';

import logo from '../../assets/logoJussiVectorGreen.svg';

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
          <a href="/login">Login</a>
          <CgShoppingCart size={22} />
        </ProfileContainer>
      </Content>
    </Container>
  );
};

export default Header;
