import styled from "styled-components";
import { FlexboxStructure, PxToRem } from "../../theme/styles";

const CartContainer = styled.section`
    width: auto;
    height: auto;
    ${FlexboxStructure("column","center","center")};
    font-family: ${props=>props.theme.fonts.primary};
    background: linear-gradient(
        165deg, 
        ${props=>props.theme.colors.background} 50%, 
        ${props=>props.theme.colors.white} 50%);
    gap: 1rem;
    padding: 1.75rem 4.75rem;
    

`;

const CartDecorationError = styled.section`
    ${FlexboxStructure("column","center","stretch")};
    width: 100%;
    min-height: 60vh;
    background-color: ${props=>props.theme.colors.white};
    padding: 2rem;
`;

const CartDecoration = styled.section`
    ${FlexboxStructure("column","space-between","center")};
    width: 100%;
    min-height: 60vh;
    border-radius: 1.5rem;
    background-color: ${props=>props.theme.colors.gray};
    padding: 2rem;
    font-family: ${props=>props.theme.fonts.primary};
`;

const CartTitle = styled.h1`
    font-size: ${PxToRem(42)};
    font-weight: 700;
    font-family: inherit;
    color:${props=>props.theme.colors.buttons};
    width: 100%;
    margin: 1rem 3rem .75rem 3rem;
    border-bottom: 1px solid ${props=>props.theme.colors.white};
    text-transform: uppercase;
    text-align: center;
`;

const CartItems = styled.section`
    ${FlexboxStructure("row","center","center")};
    gap:0.5rem;
    margin: 1rem 3rem;
    padding: 0.5rem;

`;

const CartProduct = styled.section`
    border:1px solid ${props => props.theme.colors.gray};
    border-radius: .5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.5fr 1fr 0.5fr;
    grid-template-rows: repeat(2,1fr);
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    grid-template-areas: 
    "imagen title title title total delete"
    "imagen price discount number total delete";
    gap:.5rem;
    width: 100%;
    padding: .75rem;
    height: 200px;
`;

const CartProductImage = styled.img`
    grid-area: imagen;
    border-radius: .5rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 0.375rem;
    margin: auto;
`;

const CartProductName = styled.p`
    width: 100%;
    font-family: inherit;
    grid-area: title;
    color: ${props=> props.theme.colors.details};
    margin: 0;
    text-align: left;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${PxToRem(24)};
`;

const CartProductOriginalPrice = styled.p`
    width: 100%;
    font-family: ${props=>props.theme.fonts.secondary};
    grid-area: price;
    color:${props=> props.theme.colors.details};
    margin:0;
    text-align: center;
    font-size: ${PxToRem(20)};
`;

const CartProductDiscount = styled.p`
    width: 100%;
    font-family: ${props=>props.theme.fonts.secondary};
    grid-area: discount;
    color:${props=> props.theme.colors.marks};
    margin:0;
    text-align: start;
    font-size: ${PxToRem(20)};
`;

const CartProductNumber = styled.input`
    grid-area: number;
    font-family: ${props=>props.theme.fonts.secondary};
    color: ${props=> props.theme.colors.details};
    margin: 0;
    text-align: center;
    flex-grow: 1;
    width: auto;
    margin: 0px 8px;
    background-color: ${props=> props.theme.colors.gray};
    border: 1px solid ${props=> props.theme.colors.background};
    font-size: ${PxToRem(20)};
`;

const CartProductTotal = styled.p`
    grid-area: total;
    font-family: ${props=>props.theme.fonts.secondary};
    color:${props=> props.theme.colors.background};
    margin:0;
    text-align: right;
    font-weight: 700;
    font-size: ${PxToRem(20)};
`;

const CartDeleteButton = styled.i`
    grid-area:delete;
    cursor: pointer;
    color: ${props=> props.theme.colors.background};
    font-size: ${PxToRem(32)};
    line-height: 1;
    text-align: center;
    display: inline-block;
    overflow: hidden;
`;

const CartPayment = styled.div`
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
    CartContainer,
    CartDecoration,
    CartTitle,
    CartItems,
    CartProduct,
    CartProductImage,
    CartProductName,
    CartProductOriginalPrice,
    CartProductDiscount,
    CartProductNumber,
    CartProductTotal,
    CartDeleteButton,
    CartPayment,
    CartDecorationError
}