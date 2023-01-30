import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   body {
     background: ${({ theme }) => theme.background};
     color: ${({ theme }) => theme.color};
     transition: all 0.50s linear; 

    //  Para agregar la foto en el background
    //  background-image: url(images/home/Imagen-Portada.png);
    //  background-repeat: no-repeat;
    //  background-position-x: 105%;
    //  background-size: 97vh;
    //  background-position-y: bottom;
  }
`;

export default GlobalStyles;
