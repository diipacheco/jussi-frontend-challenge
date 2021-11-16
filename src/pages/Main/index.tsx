import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import SecondaryBanner from '../../components/SecondaryBanner';
import SolutionsSection from '../../components/SolutionsSection';
import JussiSection from '../../components/JussiSection';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <SecondaryBanner />
      <SolutionsSection />
      <JussiSection />
    </Container>
  );
};

export default Main;
