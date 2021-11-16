import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 436px;

  background: var(--black);

  > h1 {
    width: 560px;
    text-align: center;
    font-size: 32px;
    color: var(--white);
  }

  .input-container {
    margin-top: 24px;
    width: 502px;
    border-bottom: 1px solid var(--green);
    padding: 18px 0;

    position: relative;

    > input {
      width: 100%;
      color: var(--white);
      outline: 0;

      ::placeholder {
        color: var(--white);
      }
    }

    > button {
      position: absolute;
      color: var(--green);
      right: 0;
    }
  }
`;
