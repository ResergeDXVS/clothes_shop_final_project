import styled from "styled-components";
import { FlexboxStructure, PxToRem } from "../../theme/styles";

const AlertContainer = styled.section`
    position: fixed;
    left:50%;
    bottom: -100%;
    transform:translateX(-50%);
    width: 400px;
    height: auto;
    ${FlexboxStructure("column","center","center")};
    color: ${p => p.theme.colors.gray};
    gap:0.5rem;
    padding:2rem;
    border-radius: 1.5rem;
    background-color: ${p => p.theme.colors.background};    
    box-shadow: 0 4px 12px rgba(110, 110, 110, 0.2); 
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    &.alert--show{
        opacity: 1;
        bottom:30%;
    }
`;

const AlertTitle = styled.h2`
    width: 100%;
    color: ${p => p.theme.colors.white};
    font-family: ${p=>p.theme.fonts.primary};
    font-size: ${PxToRem(28)};
    font-weight: 700;
    margin-top: .75rem 2rem .5rem 2rem;
    border-bottom: 1px solid ${p => p.theme.colors.gray};
    text-align: center;
`;

const AlertMessage = styled.h2`
    color: ${p => p.theme.colors.white};
    font-family: ${p=>p.theme.fonts.secondary};
    font-size: ${PxToRem(20)};
    font-weight: 400;
    margin-top: .75rem 2rem .5rem 2rem;
    text-align: center;
`;
const AlertButton = styled.button`
    width: 50%;
    color: ${p => p.theme.colors.white};
    background-color: ${props => props.theme.colors.buttons};
    color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.buttons};
    border-radius: 1.5rem;
    font-size: ${PxToRem(24)};
    font-weight: 500;
    line-height: 1.2;
    box-sizing: border-box;
    margin: .75rem 1rem;
    padding: 0.5rem;
`;

export {
    AlertContainer,
    AlertTitle,
    AlertMessage,
    AlertButton
}