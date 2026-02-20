import styled from "styled-components";
import { FlexboxStructure, PxToRem } from "../../../../theme/styles";

const ProductNavigateContainer = styled.div`
    ${FlexboxStructure("column","center","center")};
    gap:1rem;
    width: 100%;
    padding: 1.75rem 2.75rem;
    
`;
const ProductNavigateTitle = styled.h1`
    font-size: ${PxToRem(42)};
    font-weight: 700;
    font-family: ${p => p.theme.fonts.primary};
    color:${props=>props.theme.colors.background};
    margin: 1rem 3rem .75rem 3rem;
    border-bottom: 1px solid ${props=>props.theme.colors.background};
    text-transform: uppercase;

`;

const ProductNavigateErrorContainer = styled.div`
    width: 100%;
    height: 70vh;
    padding: 2rem;
    ${FlexboxStructure("column","center","center")};
`;

const ProductNavigateError = styled.h1`
    font-size: ${PxToRem(42)};
    font-weight: 700;
    font-family: ${p => p.theme.fonts.primary};
    color:${props=>props.theme.colors.background};
    width: auto;
    margin: 1rem 3rem .75rem 3rem;
    border-bottom: 1px solid ${props=>props.theme.colors.background};
    text-transform: uppercase;
    text-align: center;
`;

export {
    ProductNavigateContainer,
    ProductNavigateTitle,
    ProductNavigateErrorContainer,
    ProductNavigateError
}