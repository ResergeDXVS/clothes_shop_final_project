import React from "react";
import { Products } from "../../../redux/slices/productSlice";
import { ProductButton, ProductContainer, ProductDiscount, ProductImagen, ProductPrice, ProductTitle } from "./styles";

interface ProductProps {
    product:Products
}

const Product = ({product}:ProductProps) =>{
    return (
        <ProductContainer $hasDiscount={!!product.promotion}>
            <ProductImagen>
                <img
                    src={product.image}
                    alt={product.name}/>
            </ProductImagen>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice 
                $isTotal={!!product.promotion}>
                ${product.price}
            </ProductPrice>
            {
                product.promotion && (
                    <>
                        <ProductDiscount>{product.promotion}%</ProductDiscount>
                        <ProductPrice $isTotal={false}>
                            ${(product?.price * (1-(product?.promotion/100))).toFixed(2)}
                        </ProductPrice>
                    </>
                )
            }
            <ProductButton>Guardar al carrito</ProductButton>
        </ProductContainer>
    );
}

export default Product;