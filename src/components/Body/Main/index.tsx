import React, { Fragment, useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Carousel from "../Carousel";
import Companies from "../Companies";
import { useAppSelector } from "../../../redux/store/store";
import { ProductTitles } from "./styles";
import { Products } from "../../../redux/slices/productSlice";
import ProductList from "../Products/ProductList";
import HeaderLogin from "../../Header/HeaderLogin";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const products = useAppSelector(state=>state.product.products);
    let auxList:number[] = [];

    function getRandomInt(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const generateList = () => {
        const productList: Products[] = [];
        while(auxList.length<8){
            let index = getRandomInt(0,products.length-1);
            if (!auxList.includes(index)) auxList.push(index);
        }
        for(let aux of auxList){
            productList.push(products[aux]);
        }
        console.log(auxList);
        return productList;
    }

    

    

    return(
        <Fragment>
            <Header/>
                <Carousel/>
                <Companies/>
                <ProductTitles>Alguno de nuestros productos</ProductTitles>
                {
                    <ProductList
                        list={generateList()}/>
                }
            <Footer/>
        </Fragment>
    );
}

export default Main;