import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 240px;
  height: 40px;

  position: relative;
  margin-right: 32px;
  border: 1px solid var(--grey);
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

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 240px;
  position: absolute;
  top: 44px;

  background: var(--white);
  border: 1px solid var(--grey);
  border-radius: 5px;
  box-shadow: 0px 22px 22px rgba(0, 0, 0, 0.2);

  .title {
    padding: 08px 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    > h4 {
      color: var(--dark-grey);
      font-weight: normal;
    }
  }

  > ul {
    padding: 08px 12px;

    list-style-type: none;

    li + li {
      margin-top: 10px;
    }

    > li {
      display: flex;
      align-items: center;
      border-radius: 6px;
      background: var(--grey);
      padding: 09px 08px;

      .product-name {
        background: var(--green);
        color: var(--white);
        border-radius: 6px;
        font-size: 14px;
        font-weight: 700;
        padding: 02px 08px;
        text-align: center;
      }

      .product-description {
        margin-left: 12px;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
