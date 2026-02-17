import styled, { css } from "styled-components";
import { FlexboxStructure, phoneAdjustments, PxToRem } from "../../theme/styles";

const FooterStructure = styled.footer`
    ${FlexboxStructure("row","center","center")};
    font-family: ${props => props.theme.fonts.secondary};
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    box-sizing: border-box;
    padding: 1.5rem 2.75rem 0.1rem 2.75rem;
`;

const FooterTitles = styled.h5`
    font-family: ${props => props.theme.fonts.primary};
    width: 100%;
    font-size: ${PxToRem(20)};
    font-weight: 500;
    color: ${props => props.theme.colors.details};
    border-bottom: 2px solid ${props => props.theme.colors.details};
    text-align: center;
    padding: 0 2rem;
    box-sizing: border-box;
`;

const FooterInfo = styled.section`
    ${FlexboxStructure("column","center","center")};
    font-family: inherit;
    margin: 0 2rem;
    margin-top: 0.75rem;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
    div{
        ${FlexboxStructure("row","space-evenly","center")};
        gap: 2.5rem;
        margin: 0.5rem 0 0.7rem 0;
        a{
            font-family:inherit;
            color: ${props => props.theme.colors.white};
            font-weight: 300;
            text-decoration: none;
            cursor: pointer;
        }
    }
`;

const FooterNetworks = styled.section`
    ${FlexboxStructure("column","center","center")};
    font-family: inherit;
    margin: 0 2rem;
    margin-top: 0.75rem;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
    div{
        ${FlexboxStructure("row","space-between","center")};
        gap: 2.5rem;
        margin: 0.5rem 0 0.7rem 0;
        a{
            ${FlexboxStructure("row","center","center")};
            text-decoration: none;
            cursor: pointer;
            i{
                color: ${props => props.theme.colors.white};
                font-size: ${PxToRem(28)};
                margin: 0;
                padding: 0;
            }
        }
    }

`;

const FooterContacts = styled.section`
    ${FlexboxStructure("column","center","center")};
    font-family: inherit;
    margin: 0 2rem;
    margin-top: 0.6rem;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
    div{
        ${FlexboxStructure("row","space-between","center")};
        gap: 2.5rem;
        margin: 0.5rem 0 0.7rem 0;
        p{
            font-family: inherit;
            color: ${props => props.theme.colors.white};
            font-weight: 300;
            text-decoration: none;
            a{
                font-family: inherit;
                cursor: pointer;
                color: ${props => props.theme.colors.details};
                margin: 0 0.4rem;
                text-decoration: none;
            }
        }
    }
`;

const FooterCopyrights = styled.section`
    ${FlexboxStructure("column","center","center")};
    font-family: inherit;
    margin: 0 2rem;
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
    p{
        font-family: inherit;
        color: ${props => props.theme.colors.white};
        font-weight: 200;
        font-size: ${PxToRem(12)};
        text-align: center;
        a{
            font-family: inherit;
            font-size: inherit;
            font-style: 500;
            cursor: pointer;
            color: ${props => props.theme.colors.details};
            margin: 0 0.4rem;
            text-decoration: none;
        }
    }
`;

export {
    FooterTitles,
    FooterStructure,
    FooterCopyrights,
    FooterInfo,
    FooterContacts,
    FooterNetworks,
}