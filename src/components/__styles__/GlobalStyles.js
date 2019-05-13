import { createGlobalStyle } from 'styled-components'
import theme from './DefaultTheme'

const GlobalStyles = createGlobalStyle`  
    html {
        font-size: 10px;
    }
    body {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
        @media (${theme.mobileScreen}){
            font-size: 1.5rem;
        }
        @media (${theme.desktopScreen}){
            font-size: 2rem;
        }
        line-height: 2;
        font-family: sans-serif;
        background: ${theme.black}
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
    fieldset {
        border: 0;
        padding: 0;
    }
    label, input {
        display: block;
    }
    
`;

export default GlobalStyles