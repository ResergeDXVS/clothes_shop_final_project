import styled from "styled-components";
import { FlexboxStructure, PxToRem } from "../../../theme/styles";

const PaymentMethodDecoration = styled.section`
    ${FlexboxStructure("column","center","center")};
    width: auto;
    min-height: 60vh;
    border-radius: 1.5rem;
    border: 2px solid ${p=>p.theme.colors.background};
    background-color: ${p=>p.theme.colors.white};
    padding: 6rem;
`;

const PaymentMethodTitle = styled.h1`
    width: 100%;
    margin: 2rem 3rem;
    font-size: ${PxToRem(42)};
    font-weight: 700;
    font-family: inherit;
    color:${props=>props.theme.colors.buttons};
    border-bottom: 1px solid ${props=>props.theme.colors.gray};
    text-transform: uppercase;
    text-align: center;
`;

const PaymentMethodForm = styled.form`
    width: 100%;
    border: 2px solid ${p=>p.theme.colors.gray};
    margin: 2rem 0;
`;

const PaymentMethodDiv = styled.div`
    ${FlexboxStructure("row","center","center")};
    padding: .75rem 3rem;
    gap:2rem;

`;

const PaymentMethodInput = styled.input`
    width: auto;
    font-size: ${PxToRem(26)};
    margin: 0;
`;

const PaymentMethodLabel = styled.label`
    width: auto;
    margin: 0;
    line-height: 1;
    font-size: ${PxToRem(26)};
    padding: 1rem;
    
`;

const PaymentMethodAddButton = styled.div`
    ${FlexboxStructure("row","center","center")};
    color: ${p=>p.theme.colors.details};
    background-color: ${p=>p.theme.colors.white};
    border:1px solid ${p=>p.theme.colors.gray};
    padding: .75rem;
    width: 100%;
    font-size: ${PxToRem(26)};
    gap: 0.75rem;
    &:hover{
        cursor: pointer;
    }
    i{
        font-size: ${PxToRem(26)};    
        display: flex;
        justify-content: center;
        text-align: center;
        line-height: 1;
    }
    p{
        font-size: ${PxToRem(26)};    
        text-align: center;
        line-height: 1;
        margin: 0;
    }
`;

const PaymentMethodPayment = styled.div`
    ${FlexboxStructure("column","center","center")};
    width: 100%;
    margin: 2rem;
    box-sizing: border-box;
    button{
        width: 50%;
        color:${props=> props.theme.colors.white};
        border: 1px solid ${props=> props.theme.colors.marks};
        background-color:${props=> props.theme.colors.marks};
        box-sizing: border-box;
        font-size: ${PxToRem(32)};
        padding: .75rem;
        border-radius: .75rem;
        font-weight: 700;
    }
`;

export {
    PaymentMethodDecoration,
    PaymentMethodTitle,
    PaymentMethodForm,
    PaymentMethodInput,
    PaymentMethodLabel,
    PaymentMethodAddButton,
    PaymentMethodPayment,
    PaymentMethodDiv
}