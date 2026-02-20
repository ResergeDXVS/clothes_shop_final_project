import React, { Fragment } from "react"
import { useSearchParams } from "react-router-dom"
import { useAppSelector } from "../../../../redux/store/store";
import Footer from "../../../Footer";
import { Products } from "../../../../redux/slices/productSlice";
import ProductList from "../ProductList";
import { ProductNavigateTitle, ProductNavigateContainer, ProductNavigateErrorContainer, ProductNavigateError } from "./styles";
import Header from "../../../Header";
const ProductNavigate = () => {
    const [searchParams] = useSearchParams();
    const products = useAppSelector(state=>state.product.products);
    const catalog = useAppSelector(state=>state.data.categories);
    const tag = searchParams.get("type");
    const validProducts = (tag:string | undefined,list:Products[]) => (
        <ProductNavigateContainer>
            <ProductNavigateTitle>Catálogo de {tag}</ProductNavigateTitle>
            <ProductList list={list}/>
        </ProductNavigateContainer>
    );

    const errorListView = (message:string) => (
        <ProductNavigateErrorContainer>
            <ProductNavigateError>{message}</ProductNavigateError>
        </ProductNavigateErrorContainer>
    );

    const render = () => {
        if(tag){
            const valid = catalog.some(p=> p.id === Number(tag));
            if (valid){
                const tag_name = catalog.find(p=>p.id === Number(tag))?.category;
                const productList = products.filter(product=>product.category_id===Number(tag));
                if(productList.length===0){
                    return errorListView(`No se encontraron productos disponibles de la categoría ${tag_name}.`);
                }else{
                    return validProducts(tag_name,productList);
                }
                
            }else{
                return errorListView("No se encontraron productos de la categoria seleccionada.");
            }
        }else{
            return errorListView("Error en la busqueda de productos.");
        }
        
    }

    return(
        <Fragment>
            <Header/>
            {
                render()
            }
            <Footer/>
        </Fragment>
    );
}

export default ProductNavigate;