import React from 'react';

import arrowRight from '../../assets/arrow-right.svg';
import brastempLogo from '../../assets/logo-brastemp.svg';
import compraCertaLogo from '../../assets/logo-compra-certa.svg';
import consulLogo from '../../assets/logo-consul.svg';
import theBarLogo from '../../assets/logo-thebar.svg';

import { Container } from './styles';

const SecondaryBanner: React.FC = () => {
  const images = [
    {
      id: 1,
      brand: 'Brastemp',
      image: brastempLogo,
    },
    {
      id: 2,
      brand: 'Compra Certa',
      image: compraCertaLogo,
    },
    {
      id: 3,
      brand: 'Consul',
      image: consulLogo,
    },
    {
      id: 4,
      brand: 'The Bar',
      image: theBarLogo,
    },
  ];
  return (
    <Container>
      <p>Nossas principais lojas VTEX</p>
      <img src={arrowRight} alt="Seta para direita" />
      {images.map(({ image, brand, id }) => (
        <img key={id} src={image} alt={`Logo da ${brand}`} />
      ))}
    </Container>
  );
};

export default SecondaryBanner;
