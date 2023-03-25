import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, no-button, input {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  h1, h2, h3, label {
    font-family: 'Space Mono', monospace;
   }
  :root {
    --color-primary: #0d2f81;
    --color-secondary: #ffe7aa;
    --color-tertiary: #fff;
    --color-quaternary: #000;
    --color-blue: #0061ff;
    --color-border: #bdc4c9;
  }
`;