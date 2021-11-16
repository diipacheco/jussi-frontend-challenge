import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 480px;

  background: var(--pink);

  > h1 {
    width: 700px;
    font-size: 32px;
    color: var(--white);
    text-align: center;
  }

  > small {
    margin-top: 32px;
    color: var(--white);
  }

  > p {
    margin-top: 8px;
    font-size: 32px;
    color: var(--white);
  }
`;
