import styled from "styled-components";
import { FlexboxStructure, PxToRem } from "../../../theme/styles";

const UserHeader = styled.header`
    ${FlexboxStructure("row","center","center")};
    width: 100%;
    height: fit-content;
    padding: 1.5rem 2.75rem;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.background};
`;

const UserHeaderLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: fit-content;
    img{
        width: 80px;
        height: auto;
    }
    p{
        font-size: ${PxToRem(28)};
        font-family: ${props => props.theme.fonts.primary};
        color: ${props => props.theme.colors.buttons};
        line-height: 1.2;
        font-weight: 900;
    }
`;
export {
    UserHeader,
    UserHeaderLogo
}