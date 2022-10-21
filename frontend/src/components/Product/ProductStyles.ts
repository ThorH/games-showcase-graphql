import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styleVariables";

export const ProductContainer = styled(Link)`
    background-color: ${colors.blueLightTheme};
    display: flex;
    flex-wrap: wrap;
    width: 150px;
    height: 230px;
    text-align: center;
    margin: 10px;

    img {
        width: 100%;
    }
    h4 {
        width: 100%;
        margin: 5px 5px 0 5px;
        font-weight: 500;
    }
    p {
        display: flex;
        align-items: center;
        font-size: 12px;
        background-color: ${colors.blueGrayTheme};
        color: ${colors.blueLighter};
        padding: 0 5px;
        height: 25px;
        margin: auto 5px 5px auto;
    }
`;