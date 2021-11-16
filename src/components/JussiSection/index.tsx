import React from 'react';

import imageJussi from '../../assets/image-jussi.png';

import { Container } from './styles';

const JussiSection: React.FC = () => {
  return (
    <Container>
      <div className="text-column">
        <h1>OLÁ, SOMOS A JÜSSI</h1>
        <p>
          A Jüssi é uma agência integrante do grupo global WPP que vem há 10
          anos consolidando o pensamento voltado para produtos e resolução de
          problemas. Nosso área dedicada exclusivamente para Produtos Digitais é
          organizada em 6 especialidades: Product Managamenet, User Experience
          Design, SEO, Tecnologia, Agile e User Behavior Analytics.
        </p>
        <button type="button">Conheça a Jüssi</button>
      </div>
      <div className="image-column">
        <img src={imageJussi} alt="Imagem do escritório da Jüssi" />
      </div>
      <div className="grey-background" />
    </Container>
  );
};

export default JussiSection;
