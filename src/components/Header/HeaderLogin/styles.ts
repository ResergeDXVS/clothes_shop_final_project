import styled from "styled-components";
import { FlexboxStructure, PxToRem } from "../../../theme/styles";

const UserContainer = styled.div`
    position: absolute;
    top: 120%;
    right: -165%;
    width: 360px;
    z-index: 10;
    background-color: ${props => props.theme.colors.white};
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    opacity: 0;
    pointer-events: none;
    &.user--show {
        opacity: 1;
        pointer-events: auto;
    }

`;

const LoginContainer = styled.div`
    ${FlexboxStructure("column","strech","center")};
    gap: .5rem;
    margin:.5rem;
    p{
        width: 100%;
        color:${props=>props.theme.colors.details};
        font-size: ${PxToRem(18)};
        font-weight: 600;
        text-align: center;
        margin: 0;
        text-transform: uppercase;
    }

`;

const LoginButton = styled.button<{$login:boolean}>`
    padding: .75rem 0.25rem;
    width:100%;
    background-color: ${({ $login,theme })=> $login ? 
        `${ theme.colors.details }` : 
        `${  theme.colors.marks }`};  
    border-radius: 1rem;
    border: 1px solid ${({ $login,theme })=> $login ? 
        `${ theme.colors.details}` : 
        `${ theme.colors.marks}`};
    color: ${ props => props.theme.colors.white };
    font-size: ${PxToRem(16)};
`;

export {
    UserContainer,
    LoginContainer,
    LoginButton
}