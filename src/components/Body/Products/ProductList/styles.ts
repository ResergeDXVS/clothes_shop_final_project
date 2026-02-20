import styled from "styled-components";

const ProductListGrid = styled.div`
    margin: 1.75rem 4.75rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(10%, 1fr));
    grid-template-rows: auto;
    gap: 3rem;
`;

export {
    ProductListGrid 
}