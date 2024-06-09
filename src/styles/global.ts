import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["yellow-50"]};
    color: ${(props) => props.theme.black};
  }

  h1, h2, h3 {
    font-family: "Kalam", cursive;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme.black};
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  body, input, textarea, p {
    font-family: "Nunito", sans-serif;
    font-size: 0.875;
    line-height: 1.5;
  }

  button, a {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 0.875;
    color: ${(props) => props.theme["blue-800"]};
  }
`;
