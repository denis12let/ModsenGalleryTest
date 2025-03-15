import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

img {
  max-width: 100%;
  display: block;
}

html,
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

html {
  font-size: 16px;
}

body {
  overflow-x: hidden;
}

button {
  background-color: white;
  outline: none;
}

@font-face {
  font-family: 'Lexend Deca';
  src: url('/fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Lexend Deca';
  src: url('/fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Signika';
  src: url('/fonts/Signika/Signika-VariableFont_GRAD,wght.ttf');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat/Montserrat-VariableFont_wght.ttf');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url('/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
`;
