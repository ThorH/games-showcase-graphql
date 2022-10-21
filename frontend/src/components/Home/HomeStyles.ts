import styled from 'styled-components'
import { colors, boxShadowDefault } from '../../styleVariables';

export const HomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const SectionsContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const SectionListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 100px;
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: ${colors.blueDarkTheme};
    width: 100%;
    padding: 20px;
    margin: 10px;
    box-shadow: ${boxShadowDefault};
`;

export const SectionHeaderContainer = styled.div`
    display: flex;
    width: 100%;
    svg {
        margin-left: auto;
        color: ${colors.red};
        cursor: pointer;
        
        &:hover {
            color: ${colors.redDark};
        }
    }
`;

export const CreateSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    a {
        background-color: ${colors.green};
        color: ${colors.greenLighter};
        font-size: 16px;
        font-weight: 500;
        padding: 8px 20px;
        border-radius: 4px;
        margin-top: 10px;

        &:hover {
            background-color: ${colors.greenLight}
        }
    }
`;

export const ProductListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
   
    h2 {
        width: 100%;
    }
`;