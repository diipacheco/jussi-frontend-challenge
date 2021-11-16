import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 560px;

  background-color: var(--green);
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;

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
    width: 40%;

    position: relative;

    div:nth-child(1) {
      top: -40px;
      z-index: 2;
    }

    div:nth-child(2) {
      right: 540px;
      left: 148px;
      top: 100px;
    }

    div:nth-child(3) {
      right: 160px;
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
