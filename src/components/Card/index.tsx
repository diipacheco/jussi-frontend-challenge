import React from 'react';

import { Container, ProductImage } from './styles';

interface ICard {
  imageText: string;
  name: string;
  description: string;
  features: string[];
}

const Card: React.FC<ICard> = ({ imageText, name, description, features }) => {
  return (
    <Container>
      <ProductImage>
        <strong>{imageText.toUpperCase()}</strong>
      </ProductImage>

      <p className="product-name">{name}</p>
      <p className="product-description">{description}</p>

      <ul className="features-list">
        {features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <button type="button">Ver solução</button>
    </Container>
  );
};

export default Card;
