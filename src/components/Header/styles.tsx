import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 80px;
  padding: 24px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;

  margin-left: 37px;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;

  > ul {
    display: flex;
    list-style: none;

    > li + li {
      margin-left: 32px;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    margin-left: 33px;
  }
`;
