import React from "react";
import { Products } from "../../../../redux/slices/productSlice";
import { ProductListGrid } from "./styles";
import Product from "..";

interface ProductListProps {
    list:Products[]
}
const ProductList = ({list}:ProductListProps) => {
    return(<>
        <ProductListGrid>
            {
                list.map((product)=>(
                    <Product 
                        key={product.id}
                        product={product}></Product>
                ))
            }
        </ProductListGrid>
    </>);
};

export default ProductList;