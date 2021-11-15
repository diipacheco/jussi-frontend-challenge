import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import SecondaryBanner from '../../components/SecondaryBanner';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <SecondaryBanner />
    </Container>
  );
};

export default Main;
