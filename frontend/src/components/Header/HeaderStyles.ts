import styled from "styled-components";
import { colors } from "../../styleVariables";

export const HeaderContainer = styled.header`
    display: flex;
    background-color: ${colors.blueDarkerTheme};
    width: 100%;
    height: 100px;
    color: ${colors.white};
   

    nav {
        margin: auto 0 10px 50px;
        a {
            font-size: 18px;
            font-weight: 500;
            margin: 0 10px;
        }

    }
`;