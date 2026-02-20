import React, { Fragment } from "react";
import { Products } from "../../../redux/slices/productSlice";
import { ProductButton, ProductContainer, ProductDiscount, ProductImagen, ProductPrice, ProductTitle } from "./styles";
import { useAppSelector } from "../../../redux/store/store";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/slices/cartSlice";
import Alert from "../../Alert";

interface ProductProps {
    product:Products
}

const Product = ({product}:ProductProps) =>{
    const user = useAppSelector(state=>state.user.actualUser);
    const dispatch = useDispatch();
    const addProduct = (product:Products) => {
        if(user){
            dispatch(addCart({user,product}));
        }else{
            console.log("dadsada");
            const alert = document.getElementById("alert_product")
            alert?.classList.toggle("alert--show");
        }   
    };

    const showAlert = () => {console.log("dadsada");
        const alert = document.getElementById("alert_product")
        alert?.classList.toggle("alert--show");
        
    }

    return (
        <Fragment>
            <ProductContainer $hasDiscount={!!product.promotion}>
                <ProductImagen>
                    <img
                        src={product.image}
                        alt={product.name}/>
                </ProductImagen>
                <ProductTitle>{product.name}</ProductTitle>
                
                {
                    product.promotion && (
                        <>
                            <ProductDiscount>{product.promotion}%</ProductDiscount>
                            <ProductPrice 
                                $isTotal={false}>
                                ${product.price}
                            </ProductPrice>
                        </>
                    )
                }
                <ProductPrice 
                    $isTotal={true}>
                        ${((product.price * (1-(product.promotion/100)))).toFixed(2)}
                    
                </ProductPrice>
                <ProductButton
                    onClick={()=>addProduct(product)}>
                        Guardar al carrito
                </ProductButton>
            </ProductContainer>
            <Alert 
                id="alert_product"
                title={"Acceder a cuenta"} 
                message={"Se necesita ingresar a la cuenta o crear una para agregar productos al carrito."}
                action={showAlert}/>
        </Fragment>
    );
}

export default Product;