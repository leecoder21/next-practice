import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
    color: #ffffff;
    background-color: #000000;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }

  a,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  ul {
    list-style: none;
  }

  button {
    outline: none;
    cursor: pointer;
  }
`;
