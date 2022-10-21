import styled from "styled-components";
import { colors, boxShadowDefault } from "../../styleVariables";

export const ProductDetailsContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${colors.blueDarkTheme};
    margin: 10px;
    box-shadow: ${boxShadowDefault};
    img {
        width: 45%;
    }
`;

export const ProductInfosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 55%;
    padding: 20px;

    h2 {
        font-size: 28px;
        width: 100%;
    }

    p {
        font-size: 16px;
        font-weight: 300;
        margin-top: 10px;
    }
`;

export const DescriptionInfo = styled.p`
    color: ${colors.whiteBlue};
    width: 100%;
`;

export const InfoRow = styled.div`
    display: flex;
    width: 100%;
`;

export const InfoLabel = styled.p`
    color: ${colors.grayDarkBlue};
    margin-right: 5px;
`;

export const ReleaseInfo = styled.p`
    color: ${colors.grayBlue};
`;

export const OtherInfos = styled.p`
    color: ${colors.blueLight};
`;

export const PriceInfo = styled.p`
    display: flex;
    align-items: center;
    background-color: ${colors.blueGrayTheme};
    color: ${colors.whiteBlue};
    padding: 0 10px;
    height: 50px;
    margin-left: auto;
`;