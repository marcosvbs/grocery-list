import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    width: 100vw;
    height: 100vh;
  }

  h1, h2, h3 {
    font-family: "Red Hat Display", sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme["title-text"]};
  }

  h1 {
    font-size: 3rem;
    font-weight: 400;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
  }

  body {
    font-family: "Red Hat Text", sans-serif;
    font-weight: 400;
    font-size: 0.875;
    line-height: 1.5;
  }

   input, textarea, p {
    color: ${(props) => props.theme["body-text"]};
    font-family: "Red Hat Text", sans-serif;
    font-weight: 400;
    font-size: 0.875;
    line-height: 1.5;
  }

  button {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 700;
    font-size: 0.875;
    color: ${(props) => props.theme["title-text"]};
    
    border: none;
    border-radius: 6px;
  }

  a {
    font-family: "Red Hat Text", sans-serif;
    font-weight: 700;
    font-size: 0.875;
    color: ${(props) => props.theme["title-text"]};
  }

`;
