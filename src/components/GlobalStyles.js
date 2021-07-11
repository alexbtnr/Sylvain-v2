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
  html, body {
    overflow-x: hidden;

  }
  body {
    /* background: #cfcfff; */
    background: #F2F4F5;
    width: 100%;


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
