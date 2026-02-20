import styled from "styled-components";
import { PxToRem } from "../../../theme/styles";


const ProductTitles = styled.h2`
    font-size: ${PxToRem(32)};
    color: 1px solid ${props => props.theme.colors.background};
    font-weight: 700;
    font-family: ${props=>props.theme.fonts.primary};
    margin:1.75rem 4.75rem;
    padding: 2rem;
    border-bottom: 1px solid ${props => props.theme.colors.background};
    text-align: center;
`;

export {
    ProductTitles,
}