import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
const Carousel = () => {
    return(

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/img/carousel/carusel_tienda.png" className="d-block w-100" alt="GameDex"/>
                    <div className="carousel-caption">
                        <h5>Bienvenido a Game Dex</h5>
                        <p>Tu sitio Gamer de confianza</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/img/carousel/carusel_poster.jpeg" className="d-block w-100" alt="Poster"/>
                    <div className="carousel-caption">
                        <h5>Compra más de $1500</h5>
                        <p>Y de regalo te daremos un poster de Super Mario Galaxy "La Película".</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/img/carousel/carusel_producto.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h5>Disponibles en tienda en línea</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


    );
}

export default Carousel;