import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 600;
  src: url('../fonts/raleway-v18-latin-600italic.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('../fonts/raleway-v18-latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../fonts/raleway-v18-latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
    url('../fonts/raleway-v18-latin-600italic.woff') format('woff'), /* Modern Browsers */
    url('../fonts/raleway-v18-latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
    url('../fonts/raleway-v18-latin-600italic.svg#Raleway') format('svg'); /* Legacy iOS */
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
  
  html{
    height: 100%;
    width: 100%;
  }
  
  a {
    text-decoration: none;
  }
  
  body {
    width: 100%;
    color: #000;
    height: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    flex-direction: column;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    -moz-osx-font-smoothing: grayscale;
  }

 #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;
