import styled from "styled-components";
import { FlexboxStructure, PxToRem} from "../../theme/styles";


const HeaderBase = styled.header`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
        "logo catalog icons"
        "search search search";
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 1.5rem 2.75rem;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.background};
`;

const HeaderLogo = styled.div`
    grid-area: logo;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2rem;

    width: fit-content;
    img{
        width: 120px;
        height: auto;
    }
    p{
        font-size: ${PxToRem(24)};
        font-family: ${props => props.theme.fonts.primary};
        color: ${props => props.theme.colors.buttons};
        line-height: 1.2;
        font-weight: 900;
    }
    
`;

const HeaderOptions = styled.div`
    grid-area: catalog;
    ${FlexboxStructure("row","center","center")};
    width: auto;
    padding: 10px;
    transition: ${props=>props.theme.hovers.transition};
    gap:2rem;
    a{
        font-size: ${PxToRem(20)};
        font-family: ${props => props.theme.fonts.primary};
        color: ${props => props.theme.colors.white};
        line-height: 1.15;
        font-weight: 900;
        text-decoration: none;
    }
    
`;

const HeaderIcons = styled.div`
    grid-area: icons;
    ${FlexboxStructure("row","flex-end","center")};
    width: auto;
    padding: 0 6px;
    transition: ${props=>props.theme.hovers.transition};
    gap:1rem;
    margin-right: 2rem;
    div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: ${PxToRem(60)};
        height: ${PxToRem(60)};
        background-color: ${props => props.theme.colors.gray};
        border-radius: 50%;
        margin: 0;
        padding: 0;
        i{
            font-size: ${PxToRem(36)};    
            color: ${props => props.theme.colors.white};
            display: flex;
            justify-content: center;
            text-align: center;
            line-height: 1;
        }
    }
    
`;

export {
    HeaderBase,
    HeaderLogo,
    HeaderOptions,
    HeaderIcons
}