import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }
  body {
    background: #cfcfff;

    div.container {
      max-width: 1280px;
      margin: auto;
    }

    img {
      width: 100%;
      display: block;
      object-fit: cover;
    }
  }
`;

export default GlobalStyles;
