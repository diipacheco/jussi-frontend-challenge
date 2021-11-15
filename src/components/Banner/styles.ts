import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 80px 166px;

  background-color: var(--green);
`;

export const Content = styled.section`
  display: grid;

  width: 100%;

  grid-template-columns: 1fr 1fr;
  grid-gap: 200px;

  .text-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    max-width: 451px;

    > h1 {
      font-size: 64px;
      font-weight: 500;
    }

    > p {
      width: 330px;
      margin: 16px 0 32px 0;
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 215px;
      height: 48px;

      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 6px;
      padding: 12px 24px;
    }
  }
  .cards-column {
    display: flex;
    justify-content: center;

    position: relative;

    div:nth-child(1) {
      top: -40px;
      z-index: 2;
    }
    div:nth-child(2) {
      right: 540px;
      left: 110px;
      top: 100px;
    }
    div:nth-child(3) {
      right: 110px;
      top: 160px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 209px;
  height: 271px;
  position: absolute;

  background: var(--white);
  border: 1px solid var(--grey);
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 144px;
  height: 48px;

  color: var(--pink);
  border: 1px solid var(--pink);
  border-radius: 24px;

  margin-top: 16px;
`;
