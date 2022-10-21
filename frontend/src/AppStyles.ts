import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./styleVariables";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, p {
        color: ${colors.white};
    }

    body {
        background-color: ${colors.blueTheme};
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;


export const MainContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 20px 0;
`;