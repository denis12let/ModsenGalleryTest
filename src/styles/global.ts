import { createGlobalStyle } from 'styled-components';

import Lexend_Deca from '/fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf';
import Signika from '/fonts/Signika/Signika-VariableFont_GRAD,wght.ttf';
import Montserrat from '/fonts/Montserrat/Montserrat-VariableFont_wght.ttf';
import Roboto from '/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf';

export const GlobalStyle = createGlobalStyle<{ isModalOpen?: boolean }>`
  body {
    overflow: ${({ isModalOpen }) => (isModalOpen ? 'hidden' : 'auto')};
  }
    
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
  src: url(${Lexend_Deca});
  font-weight: 300 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Signika';
  src: url(${Signika});
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${Montserrat});
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${Roboto});
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
`;
