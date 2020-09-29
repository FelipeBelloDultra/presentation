import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  #root {
    height: 100vh;
    width: 100vw;
  }

  *, *:after, *:before {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #282c34;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
