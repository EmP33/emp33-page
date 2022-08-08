import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary-light: #293040;
        --color-primary: #222733;
        --color-primary-dark: #20242C;
    }

    body {
        margin:0;
        padding:0;
        color:var(--color-white);
        font-family: 'Open Sans', sans-serif;
        background: var(--color-primary);
        scroll-behavior: smooth;
    }
    
    *{
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
