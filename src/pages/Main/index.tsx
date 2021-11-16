import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import SecondaryBanner from '../../components/SecondaryBanner';
import SolutionsSection from '../../components/SolutionsSection';
import JussiSection from '../../components/JussiSection';
import ContactInfoSection from '../../components/ContactInfoSection';
import NewsLetterSection from '../../components/NewsLetterSection';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <SecondaryBanner />
      <SolutionsSection />
      <JussiSection />
      <ContactInfoSection />
      <NewsLetterSection />
    </Container>
  );
};

export default Main;
