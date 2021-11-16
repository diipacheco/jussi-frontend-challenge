import React from 'react';

import { Container } from './styles';

const NewsLetterSection: React.FC = () => {
  return (
    <Container>
      <h1>RECEBA NOVIDADES DA NOSSA ÁREA DE PRODUTOS DIGITAIS.</h1>
      <div className="input-container">
        <input type="text" placeholder="Digite seu email" />
        <button type="button">CADASTRAR</button>
      </div>
    </Container>
  );
};

export default NewsLetterSection;
