import React from 'react';

import wppCompany from '../../assets/wppcompany.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  const icons = [
    { id: 1, icon: facebook },
    { id: 2, icon: instagram },
    { id: 3, icon: linkedin },
  ];
  return (
    <Container>
      <img src={wppCompany} alt="WPP Company Logo" />
      <div className="icons-container">
        {icons.map(({ id, icon }) => (
          <img key={id} src={icon} alt={`${icon} Logo`} />
        ))}
      </div>
    </Container>
  );
};

export default Footer;
