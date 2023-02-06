import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  html,
  body {
    margin: 0;
  }
`;
