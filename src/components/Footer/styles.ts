import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 208px;

  width: 100%;
  height: 80px;

  background: var(--black);

  > svg {
    fill: var(--white);
  }
`;
