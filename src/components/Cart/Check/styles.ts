import styled from "styled-components";
import { FlexboxStructure, PxToRem } from "../../../theme/styles";

const CheckContainer = styled.section`
    width: auto;
    height: auto;
    ${FlexboxStructure("row","center","center")};
    font-family: ${props=>props.theme.fonts.primary};
    background: linear-gradient(
        135deg, 
        ${props=>props.theme.colors.background} 50%, 
        ${props=>props.theme.colors.white} 50%);
    gap: 1rem;
    margin: 1.75rem 4.75rem;
    

`;

const CheckTitle = styled.h1`
    font-size: ${PxToRem(42)};
    font-weight: 700;
    font-family: inherit;
    color:${props=>props.theme.colors.background};
    width: 100%;
    margin: 1rem 3rem .75rem 3rem;
    border-bottom: 4px dotted ${props=>props.theme.colors.background};
    text-transform: uppercase;
`;

const CheckSubTitle = styled.h2`
    font-size: ${PxToRem(32)};
    font-weight: 500;
    font-family: ${props=>props.theme.fonts.secondary};
    color:${props=>props.theme.colors.background};
    width: 100%;
    margin: 1rem 3rem .75rem 3rem;
    border-bottom: 1px dotted ${props=>props.theme.colors.background};
    text-transform: uppercase;
`;

const CheckItems = styled.section`
    ${FlexboxStructure("row","center","center")};
    gap:0.5rem;
    margin: 1rem 3rem;
    padding: 0.5rem;
    border-bottom: 1px dotted ${props=>props.theme.colors.background};

`;

const CheckProduct = styled.section`

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    grid-template-areas: 
    "number title price discount total";
    gap:.5rem;
    width: 100%;
    padding: .75rem;
    height: 200px;
`;


const CheckProductName = styled.p`
    width: 100%;
    font-family: inherit;
    grid-area: title;
    color: ${props=> props.theme.colors.details};
    margin: 0;
    text-align: center;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${PxToRem(24)};
`;

const CheckProductOriginalPrice = styled.p`
    width: 100%;
    font-family: ${props=>props.theme.fonts.secondary};
    grid-area: price;
    color:${props=> props.theme.colors.details};
    margin:0;
    text-align: center;
    font-size: ${PxToRem(20)};
`;

const CheckProductDiscount = styled.p`
    width: 100%;
    font-family: ${props=>props.theme.fonts.secondary};
    grid-area: discount;
    color:${props=> props.theme.colors.marks};
    margin:0;
    text-align: start;
    font-size: ${PxToRem(20)};
`;

const CheckProductNumber = styled.p`
    width: 100%;
    font-family: ${props=>props.theme.fonts.secondary};
    grid-area: number;
    color:${props=> props.theme.colors.marks};
    margin:0;
    text-align: start;
    font-size: ${PxToRem(20)};
`;

const CheckProductTotal = styled.p`
    grid-area: total;
    font-family: ${props=>props.theme.fonts.secondary};
    color:${props=> props.theme.colors.background};
    margin:0;
    text-align: right;
    font-weight: 700;
    font-size: ${PxToRem(20)};
`;



const CheckPayment = styled.div`
    width: 100%;
    margin: 1rem 3rem 2rem 3rem;
    box-sizing: border-box;
    button{
        width: auto;
        color:${props=> props.theme.colors.marks};
        border: 1px solid ${props=> props.theme.colors.marks};
        background-color:${props=> props.theme.colors.white};
        box-sizing: border-box;
        font-size: ${PxToRem(28)};
        padding: 0.75rem 2rem;
    }
`;

export {
    CheckContainer,
    CheckTitle,
    CheckItems,
    CheckProduct,
    CheckSubTitle,
    CheckProductName,
    CheckProductOriginalPrice,
    CheckProductDiscount,
    CheckProductNumber,
    CheckProductTotal,
    CheckPayment
}