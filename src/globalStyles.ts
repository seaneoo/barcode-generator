import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
    height: 100%;
  }

  body {
    margin: 0;
  }
`}`;

export default GlobalStyles;
