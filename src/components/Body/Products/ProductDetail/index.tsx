import React, { Fragment, useState } from "react"
import { ProductDetailButton, ProductDetailContainer, ProductDetailDescription, ProductDetailDiscount, ProductDetailImagen, ProductDetailPrice, ProductDetailTitle, TitlesDetails } from "./styles";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../../redux/store/store";
import Header from "../../../Header";
import Footer from "../../../Footer";
import Alert from "../../../Alert";
import { addCart } from "../../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Products } from "../../../../redux/slices/productSlice";
const ProductDetail = () => {
    const [showAlert, setShowAlert] = useState(false);
    const param = useParams<{id:string}>();
    const dispatch = useDispatch();
    const product_data = useAppSelector(state=>state.product.products);
    const product = product_data.find(product => product.id === Number(param.id));
    const user = useAppSelector(state=>state.user.actualUser);
    const addProduct = (product?: Products) => {
        if (!product) return;
        if (user) {
            dispatch(addCart({ user, product }));
        } else {
            setShowAlert(true);
        }
    };

    const structure = () => (
        <Fragment>
            <TitlesDetails>Información del Producto</TitlesDetails>
            <ProductDetailContainer>
                <ProductDetailImagen>
                    <img
                        src={product?.image}
                        alt={product?.name}/>
                </ProductDetailImagen>
                <ProductDetailTitle>
                    <h2>Nombre del producto: </h2>
                    <p>{product?.name}</p>
                </ProductDetailTitle>
                <ProductDetailPrice 
                    $isTotal={!!product?.promotion}
                    $area={"precio"}>
                    <h3>Precio original</h3>
                    <p>${product?.price}</p>
                </ProductDetailPrice>
                {
                    product?.promotion && (
                        <>
                            <ProductDetailDiscount>
                                <h4>Descuento del: </h4>
                                <p>{product?.promotion}%</p>
                            </ProductDetailDiscount>
                            <ProductDetailPrice 
                                $isTotal={false}
                                $area="total">
                                <h3>Precio con descuento:</h3>
                                <p>${(product?.price * (1-(product?.promotion/100))).toFixed(2)}</p>
                            </ProductDetailPrice>
                        </>
                    )
                }
                <ProductDetailDescription>
                    <h3>Descripción: </h3>
                    <p>{product?.description}</p>
                </ProductDetailDescription>
                <ProductDetailButton role="buttonCart" onClick={()=>product && addProduct(product)}>Guardar al carrito</ProductDetailButton>
            </ProductDetailContainer>
            <Alert
                id="alert_product"
                title={"Acceder a cuenta"} 
                message={"Se necesita ingresar a la cuenta o crear una para agregar productos al carrito."}
                action={() => setShowAlert(false)}
                visible={showAlert}/>
        </Fragment>
    )

    const error = () => (
        <p>Error en la búsqueda</p>
    )

    const render = () => {
        if (product) return structure();
       return error();
    }

    return(
        
        <Fragment>
            <Header/>
                {render()}
            <Footer/>
        </Fragment>
    );
}

export default ProductDetail;
