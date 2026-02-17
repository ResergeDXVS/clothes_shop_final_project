import styled from "styled-components";
import { FlexboxStructure } from "../../../theme/styles";

const HeaderSearchContainer = styled.form`
    ${FlexboxStructure("row","center","center")};
    grid-area: search;
    width: auto;
    height: auto;
    background-color: ${props => props.theme.colors.white};
    border-radius: 2rem;
    padding: 0.5rem;
    margin: 1.25rem 2rem 0 2rem;
    box-sizing: border-box;
`;

const HeaderSearchInput = styled.input`
    width: 100%;
    font-family: ${props => props.theme.fonts.secondary};
    color:${props => props.theme.colors.buttons};
    margin-left: 1.25rem;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: left;
    border-color: none;
    border: none;
    outline: none;
    &::placeholder {
        color: ${props => props.theme.colors.gray};
    }
`;

const HeaderSearchButton = styled.button`
    border: none;
    outline: none;
    transition: ${props => props.theme.hovers.transition};
    background-color: ${props => props.theme.colors.white};
    margin-right: 1.25rem;
    i{
        ${FlexboxStructure("row","center","center")};
        color:${props => props.theme.colors.buttons};
        margin: 0;
        font-size: 32px;
        line-height: 1;
    }
    &:hover{
        transform: ${props => props.theme.hovers.scale};
        color: ${props => props.theme.colors.details};
    }
`;

export {
    HeaderSearchContainer,
    HeaderSearchInput,
    HeaderSearchButton
};