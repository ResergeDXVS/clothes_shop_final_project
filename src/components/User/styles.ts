import styled, { css } from "styled-components";
import { FlexboxStructure, PxToRem } from "../../theme/styles";

interface FormCheck {
    $invalid: boolean|null, 
}



const UserContainerForm = styled.form`
    ${FlexboxStructure("column","center","center")};
    background: linear-gradient(
        180deg, 
        ${props=>props.theme.colors.background} 50%, 
        ${props=>props.theme.colors.white} 50%);
`;

const UserCreateTitle = styled.h1`
    color: ${props => props.theme.colors.white};
    font-weight: 700;
    font-size: ${PxToRem(32)};
    text-align: center;
    margin-top: 1.15rem;
    margin-bottom: 0.75rem;
`;


const UserFormFieldset = styled.fieldset`
    margin: 0 auto 1.5rem auto;
    padding: 1.5rem 2rem;
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 2rem;  
    width: 100%;
    max-width: 36rem;
`;

const UserFormLine = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3,auto);
    grid-template-areas: 
        "etiqueta"
        "input"
        "error";
    margin-bottom: 16px;
`;

const UserFormLabel = styled.label`
    grid-area: etiqueta;
    width: 300px;
    font-size: ${PxToRem(16)};
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    color: ${props => props.theme.colors.details};
`;

const UserFormInput = styled.input<FormCheck>`
    grid-area: input;
    flex-grow: 1;
    font-size: ${PxToRem(22)};
    text-transform: uppercase;
    border: 3px solid ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.white};
    font-weight: 600;
    border-radius: 0.5rem;
    padding: 0.25rem 0.75rem;
    &::placeholder {
        color: ${props => props.theme.colors.gray};
    }
    ${({ $invalid, theme }) =>
        $invalid === true
        ? css`border-color: ${theme.colors.details};`
        : $invalid === false
            ? css`border-color: ${theme.colors.marks};`
            : css`border-color: ${theme.colors.gray};`
    }
    
`;


const UserFormFeedback = styled.div<FormCheck>`
    font-size: 0.8rem;
    color: ${props => props.theme.colors.details};
    margin-top: 4px;
    display: ${({ $invalid }) => ($invalid ? "block" : "none")};
`;


const UserFormButtonSubmit = styled.input`
    margin: auto;
    margin-top: 1rem;
    width: 100%;
    max-width: 400px;
    flex-grow: 1;
    font-size: ${PxToRem(26)};
    text-transform: uppercase;
    border-radius: 2rem;
    border: 3px solid  ${props => props.theme.colors.buttons};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.buttons};
    font-weight: 700;
    transition: background-color 0.35s ease, 
        ${props=>props.theme.hovers.transition};
    &:hover{
        border: 3px solid  ${props => props.theme.colors.details};
        color:${props => props.theme.colors.white};
        background-color:${props => props.theme.colors.details};
        transform:${props => props.theme.hovers.scale};
    }
`;


export {
    UserContainerForm,
    UserCreateTitle,
    UserFormFieldset,
    UserFormLine,
    UserFormLabel,
    UserFormInput,
    UserFormFeedback,
    UserFormButtonSubmit
}