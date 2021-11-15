import styled from 'styled-components';

export const Container = styled.section`
  display: flex;

  width: 100%;
  height: 557px;

  padding: 56px 398px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 32px;
    line-height: 40px;

    > strong + strong {
      margin-right: 04px;
    }

    > strong {
      color: var(--green);
      font-size: 32px;
    }
  }

  .card-container {
    display: flex;
    justify-content: space-between;

    width: 120%;
  }
`;
