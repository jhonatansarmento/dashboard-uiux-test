import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  html {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;

export default GlobalStyles;
