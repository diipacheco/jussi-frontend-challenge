import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 241px;
  height: 381px;

  padding: 16px 16px 0 16px;
  background-color: var(--white);
  border: 1px solid var(--grey);
  border-radius: 4px;
  margin-top: 24px;

  .product-name {
    margin-top: 53px;
  }

  .product-description {
    color: var(--pink);
    margin: 16px 0;
    font-size: 12px;
  }

  > ul {
    list-style: none;
    li {
      color: var(--dark-grey);
      font-size: 12px;
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 209px;
    height: 48px;

    border-radius: 6px;
    margin-top: 16px;
    background: var(--green);
  }
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  background: var(--grey);
  border-radius: 50%;

  > strong {
    font-size: 32px;
    font-weight: 500;
    line-height: 38px;
  }
`;
