import React, { Fragment } from "react";
import { CheckContainer, CheckDecoration, CheckErrorContainer, CheckItems, CheckPayment, CheckProduct, CheckProductDiscount, CheckProductName, CheckProductNumber, CheckProductOriginalPrice, CheckProductTotal, CheckSubTitle, CheckTitle } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { UserHeader, UserHeaderLogo } from "../../Header/HeaderMin/styles";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../redux/slices/cartSlice";


const Check = () => {
    const actualUser = useAppSelector(state=>state.user.actualUser);
    const carts = useAppSelector(state=>state.cart.carts);
    const actualCart = carts.find(cart=>cart.user_id === actualUser?.id && cart.product_ids.length>0 && cart.payment_id!==null ) 
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const clearAndReturn = () => {
        if (actualUser) dispatch(clearCart(actualUser));
        navigate("/");

    }

    const CheckView = () => (
        <CheckContainer>
            <CheckDecoration>
                <CheckTitle>Gracias por tu compra</CheckTitle>
                <CheckSubTitle>Te mandaremos tu ticket a tu correo.</CheckSubTitle>
                <CheckItems>
                    {
                        actualCart && (
                            actualCart.product_ids.map(items=>{
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
                <CheckTitle>Total Pagado ${actualCart?.total}</CheckTitle>
                <CheckPayment>
                    <button onClick={()=>clearAndReturn()}>
                        Regresar a la página
                    </button>
                    
                </CheckPayment>
            </CheckDecoration>
        </CheckContainer>
    )

    const ErrorView = () => (
        <CheckErrorContainer>
            <CheckTitle>No se ha encontrado información completa de tu carrito, favor de entrar desde el menú principal</CheckTitle>
        </CheckErrorContainer>
    );
    const render = () => {
        if (actualCart) return CheckView();
        else return ErrorView();
    }
    return(
        <Fragment>
            <UserHeader>
                <UserHeaderLogo>
                    <img src="/img/GAME-DEX-LOGO.png" alt="GAMES DEX"/>
                    <p>GAME DEX</p>
                </UserHeaderLogo>
            </UserHeader>
            {render()}
        </Fragment>
    );
}
export default Check;