import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: ${props => props.theme.fonts.primary};
        font-size: 16px;
        margin: 0;
    }
    html {
        scroll-behavior: smooth;
    }
    header{
        background-color: ${props => props.theme.colors.background};
    }

    header,footer{
        background-color: ${props => props.theme.colors.marks};
    }
`;

export default GlobalStyle;