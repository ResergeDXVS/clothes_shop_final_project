import styled from "styled-components";

const ProductListGrid = styled.div`
    padding: 1.75rem 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-template-rows: auto;
    gap: 3rem;
    width: 100%;
`;

export {
    ProductListGrid 
}