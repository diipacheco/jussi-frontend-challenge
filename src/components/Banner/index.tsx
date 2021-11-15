import React from 'react';

import refrigerator from '../../assets/refrigerator.png';
import beater from '../../assets/beater.png';
import whiskey from '../../assets/whiskey.png';

import { Container, Content, Card, CardButton } from './styles';

const Banner: React.FC = () => {
  const cardsContent = [
    {
      id: 1,
      image: beater,
      buttonText: 'Comprar em 2x',
    },
    {
      id: 2,
      image: refrigerator,
      buttonText: 'Mais Detalhes',
    },
    {
      id: 3,
      image: whiskey,
      buttonText: 'Adicionar à sacola',
    },
  ];

  return (
    <Container>
      <Content>
        <div className="text-column">
          <h1>CRIAMOS LOJAS QUE VENDEM MAIS.</h1>
          <p>
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </p>
          <button type="button">Veja nossas soluções</button>
        </div>
        <div className="cards-column">
          {cardsContent?.map(content => (
            <Card key={content.id}>
              <img
                src={content.image}
                alt={`Imagem do produto ${content.id}`}
              />
              <CardButton>{content.buttonText}</CardButton>
            </Card>
          ))}
        </div>
      </Content>
    </Container>
  );
};

export default Banner;
