import React, { Fragment } from "react";
import { UserHeader, UserHeaderLogo } from "../Header/HeaderMin/styles";
import { CartContainer, CartDeleteButton, CartPayment, CartProduct, CartProductDiscount, CartProductImage, CartProductName, CartProductNumber, CartProductOriginalPrice, CartProductTotal, CartTitle } from "./styles";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/store/store";
const Cart = () => {
    const param = useParams<{id:string}>();
    const carts = useAppSelector(state => state.cart.carts);
    const userCart = carts.filter(cart => cart.user_id.id === Number(param) && cart.user_id.isLogged)

    const cartView = () => (
        <Fragment>
            <UserHeader>
                <UserHeaderLogo>
                    <img src="/img/GAME-DEX-LOGO.png"
                    alt="GAMES DEX"/>
                    <p>GAME DEX</p>
                </UserHeaderLogo>
            </UserHeader>
            <CartContainer>
                <CartTitle>Tu Carrito</CartTitle>
                {
                    userCart[0].product_ids && (
                        userCart[0].product_ids.map(productItem => {
                            const { product,count } = productItem;
                            return(
                                <CartProduct key={product.id}>
                                    <CartProductImage
                                    alt={product.name}
                                    src={product.image}/>
                                    <CartProductName>
                                        {product.name}
                                    </CartProductName>
                                    <CartProductOriginalPrice>
                                        {product.price}
                                    </CartProductOriginalPrice>
                                    <CartProductDiscount>
                                        {
                                            product.promotion >0 ?
                                            product.promotion+'%' :
                                            ""
                                        }
                                    </CartProductDiscount>
                                    <CartProductNumber type="number"
                                        id={"cantidad_"+product.id}
                                        name={"cantidad_"+product.id}
                                        min="0"
                                        max="100"
                                        value={count}
                                    />
                                    <CartProductTotal>
                                        ${(count*(product.price * (1-(product.promotion/100)))).toFixed(2)}
                                    </CartProductTotal>
                                    <CartDeleteButton
                                        className="fi fi-rs-trash cart__button"/>
                                </CartProduct>
                            )
                        })
                    )
                }
                <CartPayment>
                    <button>
                        Pagar ${userCart[0].total}
                    </button>
                </CartPayment>
            </CartContainer>
        </Fragment>
    );

    const errorView = () => (
        <Fragment>
            <UserHeader/>
            <CartContainer>
                <CartTitle>
                    No se puede acceder al carrito, se necesita iniciar sesión    
                </CartTitle>
            </CartContainer>
        </Fragment>
    );

    return(
        ()=> {
            if(userCart) return cartView();
            else return errorView();
        }
    );
}
export default Cart;