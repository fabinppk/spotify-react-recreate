import { createGlobalStyle } from 'styled-components';
import 'rc-slider/assets/index.css';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: #181818;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Montserrat', sans-serif;
        min-width: 1035px;
        width: auto !important;
    }
`;

export default GlobalStyle;
