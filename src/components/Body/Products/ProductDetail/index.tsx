import React, { Fragment } from "react"
import { ProductDetailButton, ProductDetailContainer, ProductDetailDescription, ProductDetailDiscount, ProductDetailImagen, ProductDetailPrice, ProductDetailTitle, TitlesDetails } from "./styles";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../../redux/store/store";
import Header from "../../../Header";
import Footer from "../../../Footer";
const ProductDetail = () => {
    const param = useParams<{id:string}>();
    const product_data = useAppSelector(state=>state.product.products);
    console.log(product_data);
    const product = product_data.find(product => product.id === Number(param.id));
    console.log(param);
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
                <ProductDetailButton>Guardar al carrito</ProductDetailButton>
            </ProductDetailContainer>
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
