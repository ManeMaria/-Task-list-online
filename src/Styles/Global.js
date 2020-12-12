import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
     
    html , body , #root{
        height: 100%;
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;    
        font-family: 'Roboto', sans-serif;
    }

    a, link,input{
        font-family: 'Roboto', sans-serif;
    
    }

`;
export default GlobalStyles;
