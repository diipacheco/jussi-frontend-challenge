import React from 'react';

import Card from '../Card';

import { Container, Content } from './styles';

const SolutionsSection: React.FC = () => {
  const products = [
    {
      id: 1,
      imageText: 'p1',
      title: 'Nome do Produto #1',
      description: 'Descrição do produto #1',
      features: ['.Feature 1', '.Feature 2', '.Feature 3'],
    },
    {
      id: 2,
      imageText: 'p2',
      title: 'Nome do Produto #2',
      description: 'Descrição do produto #2',
      features: ['.Feature 1', '.Feature 2', '.Feature 3'],
    },
    {
      id: 3,
      imageText: 'p3',
      title: 'Nome do Produto #3',
      description: 'Descrição do produto #3',
      features: ['.Feature 1', '.Feature 2', '.Feature 3'],
    },
    {
      id: 4,
      imageText: 'p4',
      title: 'Nome do Produto #4',
      description: 'Descrição do produto #4',
      features: ['.Feature 1', '.Feature 2', '.Feature 3'],
    },
  ];
  return (
    <Container>
      <Content>
        <h1>
          <strong>/</strong>
          <strong>/</strong>
          NOSSAS SOLUÇÕES
        </h1>
        <div className="card-container">
          {products.map(product => (
            <Card
              key={product.id}
              imageText={product.imageText}
              title={product.title}
              description={product.description}
              features={product.features}
            />
          ))}
        </div>
      </Content>
    </Container>
  );
};

export default SolutionsSection;
