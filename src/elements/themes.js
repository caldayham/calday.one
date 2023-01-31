import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    text: 'black',
    bg: 'white',
    lines: 'gray',
    links: 'blue',
};

export const darkTheme = {
    text: 'white',
    bg: 'black',
    lines: 'gray',
    links: 'orange',
};

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${props => props.theme.bg};
    }

    div {
        background-color: ${props => props.theme.bg};
        color: ${props => props.theme.color};
    }

    link {
        color: ${props => props.theme.links};
    }

    h1 {
        color: ${props => props.theme.text};
    }
    
    p {
        color: ${props => props.theme.text};
    }
    
    a {
        color: ${props => props.theme.links};
    }
`;