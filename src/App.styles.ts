import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary-light: #293040;
        --color-primary: #222733;
        --color-primary-dark: #20242C;

        --color-secondary: #5b41f2;

        --color-text: #767f99;

        --font-mono: 'Roboto Mono', monospace;
    }

    body {
        margin: 0;
        padding: 0;
        color: var(--color-white);
        font-family: 'Open Sans', sans-serif;
        background: var(--color-primary);
        scroll-behavior: smooth;
        user-select:none;
        overflow-x: hidden;
      
    }

    /* width */
::-webkit-scrollbar {
  width: 5px;
}

 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #8892b0; 
  border-radius: 10px;
}


    
    *{
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
