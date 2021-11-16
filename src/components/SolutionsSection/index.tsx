import React, { useEffect } from 'react';

import { useProducts } from '../../hooks/Products';

import Card from '../Card';

import { Container, Content } from './styles';

const SolutionsSection: React.FC = () => {
  const { products, handleFetchProducts } = useProducts();

  useEffect(() => {
    handleFetchProducts();
  }, [handleFetchProducts]);

  return (
    <Container>
      <Content>
        <h1>
          <strong>/</strong>
          <strong>/</strong>
          NOSSAS SOLUÇÕES
        </h1>
        <div className="card-container">
          {products?.map(product => (
            <Card
              key={product.id}
              imageText={product.imageText}
              name={product.name}
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
