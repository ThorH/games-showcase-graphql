import styled from "styled-components";
import { colors, boxShadowDefault } from '../../styleVariables';

type InteractiveProps = {
    isAdd: boolean
}

export const CreateSectionContainer = styled.div`
    width: 100%;

    h3 {
        margin-bottom: 5px;
    }
`;

export const NameSectionFieldContainer = styled.div`
   margin: 20px 0 30px 20px;

   input {
    outline: none;
    font-size: 18px;
    width: 250px;
    padding: 10px 15px;
    border-radius: 4px;
   }
`;

export const SelectedProductsContainer = styled.div`
    margin: 10px 20px;
`;

export const SelectedProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: ${colors.blueDarkTheme};
    width: 87%;
    min-height: 250px;
    padding: 10px;
    box-shadow: ${boxShadowDefault};

    h3 {
        width: 100%;
    }
`;

export const ButtonCreateContainer = styled.div`
    text-align: center;

    button {
    background-color: ${colors.green};
    color: ${colors.greenLighter};
    font-size: 16px;
    font-weight: 500;
    padding: 8px 20px;
    border-radius: 4px;
    margin-top: 10px;

        &:hover {
            background-color: ${colors.greenLight};
        }
    }
`;

export const ProductsAvailableContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    
    h2 {
        width: 100%;
    }
`;

export const InteractiveProductContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        div {
            display: flex;
        }
    }
`;

export const InteractiveContainer = styled.div<InteractiveProps>`
    display: none;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: ${colors.transparentBlack};
    width: 150px;
    height: 230px;
    
    svg {
        color: ${props => props.isAdd ? colors.green : colors.redDark};
        cursor: pointer;
        
        &:hover {
            color: ${props => props.isAdd ? colors.greenLight : colors.red}
        }
    }
`;