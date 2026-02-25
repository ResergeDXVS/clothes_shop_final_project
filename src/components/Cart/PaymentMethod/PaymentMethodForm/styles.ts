import styled from "styled-components";
import { FlexboxStructure } from "../../../../theme/styles";

const MethodFormBase = styled.div`
    position: fixed;
    left:50%;
    bottom: -100%;
    transform:translateX(-50%);
    width: 480px;
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
    &.method--show{
        opacity: 1;
        bottom:30%;
    }
`;
export{
    MethodFormBase,
}