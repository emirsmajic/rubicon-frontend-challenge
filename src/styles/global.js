import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
  }

  :root {
    /* colors */
    --dark: #000;
    --light: #fff;
    --body-background: #fff;
    --text-main: #222;
    --main-color: #006aff;
    --main-color-light: #3977FF;
    --main-color-lightest: #D4E6FF;
    --text-light: #555;
    --text-lightest: #eaeaea;

    /* utils */
    --border-radius: 4px;
    --border-radius-large: 16px;
    --border-radius-small: 2px;
    --border: 1px solid var(--text-lightest);
  }

  body.dark {
    --body-background: #1A202C;

    --text-main: #EDF2F7;
    --main-color: #006aff;
    --text-light: #CBD5E0;
    --text-lightest: #4A5568;

    --border: 1px solid var(--text-lightest);
  }

  body {
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    color: var(--text-main);
    background-color: var(--body-background);
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: inherit;
  }

  button {
    border: none;
    outline: none;
    appearance: none;
    color: inherit;
    cursor: pointer;
    background-color: transparent;
  }

  input {
    font-family: inherit;
    color: inherit;
  }
`
