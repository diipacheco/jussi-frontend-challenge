import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 648px;
  position: relative;

  padding: 56px 400px;

  .text-column {
    display: flex;
    flex-direction: column;

    > h1 {
      font-size: 32px;
    }

    > p {
      width: 241px;

      margin-top: 24px;
      line-height: 24px;
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 162px;
      height: 48px;
      border: 1px solid var(--black);
      border-radius: 6px;
      margin-top: 24px;
    }
  }

  .image-column {
    margin-left: 184px;
    position: absolute;
    right: 350px;
    z-index: 2;

    > img {
      height: 520px;
    }
  }

  .grey-background {
    position: absolute;
    width: 720px;
    height: 648px;
    z-index: 1;
    right: 0;
    top: 0;

    background: #f2f2f2;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;
