import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--black);
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  html {
    background: var(--white);
  }

  :root {
    --green: #03FFA5;
    --pink:  #EE0E7D;
    --white: #FFFF;
    --black: #000000;
    --grey:  #F2F2F2;
    --dark-grey: #5B5B5B;
  }
`;
