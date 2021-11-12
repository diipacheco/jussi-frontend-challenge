import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 240px;
  height: 40px;

  position: relative;
  margin-right: 32px;
  border: 1px solid #f2f2f2;
  border-radius: 24px;

  > input {
    width: 100%;
    outline: none;

    padding-left: 16px;

    ::placeholder {
      color: var(--pink);
      font-weight: normal;
    }
  }

  > svg {
    position: absolute;
    right: 16px;
  }
`;
