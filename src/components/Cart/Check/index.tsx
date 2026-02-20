import React from "react";
import { CheckContainer, CheckItems, CheckProduct, CheckProductDiscount, CheckProductName, CheckProductNumber, CheckProductOriginalPrice, CheckProductTotal, CheckSubTitle, CheckTitle } from "./styles";
import { Cart } from "../../../redux/slices/cartSlice";

const Check = (cart:Cart) => {
    
    return(
        <CheckContainer>
            <CheckTitle>Gracias por tu compra</CheckTitle>
            <CheckSubTitle>Te mandaremos tu ticket a tu correo.</CheckSubTitle>
            <CheckItems>
                {
                    cart && (
                        cart.product_ids.map(items=>{
                            const { product, count }=items; 
                            return(
                                <CheckProduct>
                                    <CheckProductNumber>
                                        {count} X
                                    </CheckProductNumber>
                                    <CheckProductName>
                                        {product.name}
                                    </CheckProductName>
                                    <CheckProductOriginalPrice>
                                        ${product.price}
                                    </CheckProductOriginalPrice>
                                    <CheckProductDiscount>
                                        {product.promotion}%
                                    </CheckProductDiscount>
                                    <CheckProductTotal>
                                        ${(count*(product.price * (1-(product.promotion/100)))).toFixed(2)}
                                    </CheckProductTotal>
                                </CheckProduct>
                            );
                        })
                    )
                }
            </CheckItems>
            <CheckTitle>Total Pagado ${cart.total}</CheckTitle>
        </CheckContainer>
    );
}
export default Check;