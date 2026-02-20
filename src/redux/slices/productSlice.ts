import { createSlice } from "@reduxjs/toolkit";

export type Products = {
    id: number,
    image: string,
    name: string,
    release_date: string,
    description: string,
    price: number,
    promotion: number,

    company_id: number,
    category_id: number,
}


export interface ProductsState {
    products: Products[],
}

const initialState: ProductsState = {
    products: [
        {
            id: 1,
            image: "https://cdn1.epicgames.com/spt-assets/7044c52c68ea48519b725989afad3093/ride-6-11aph.jpg",
            name: "Nioh 3",
            release_date: "2026-02-01",
            description: "Acción y RPG ambientado en Japón feudal con combates intensos y mecánicas de samuráis.",
            price: 69.99,
            promotion: 15,
            company_id:1,
            category_id:1,
        },
        {
            id: 2,
            image: "https://m.media-amazon.com/images/I/91nBIfG5loL._AC_UF1000,1000_QL80_.jpg",
            name: "Dragon Quest VII Reimagined",
            release_date: "2026-02-05",
            description: "Remake del clásico JRPG con gráficos modernos y nuevas mecánicas narrativas.",
            price: 59.99,
            promotion: 10,
            company_id:1,
            category_id:1,
        },
        {
            id: 3,
            image: "https://cdn1.epicgames.com/spt-assets/b2e589fac93746fc8d20b4177f5b3a60/resident-evil-requiem-g8jiq.jpg",
            name: "Resident Evil Requiem",
            release_date: "2026-02-10",
            description: "Nueva entrega de survival horror con atmósfera oscura y enemigos icónicos.",
            price: 69.99,
            promotion: 20,
            company_id:1,
            category_id:1,
        },
        {
            id: 4,
            image: "https://digitalworldpsn.com/wp-content/uploads/2025/09/Screenshot_2.png",
            name: "Hollow Knight: Switch 2 Edition",
            release_date: "2026-02-12",
            description: "Versión mejorada del metroidvania con soporte para la nueva consola de Nintendo.",
            price: 39.99,
            promotion: 5,
            company_id:1,
            category_id:1,
        },
        {
            id: 5,
            image: "https://images.nintendolife.com/cb661632d8e7e/mario-tennis-fever-cover.cover_300x.jpg",
            name: "Mario Tennis Fever",
            release_date: "2026-02-12",
            description: "Juego deportivo arcade con personajes clásicos de Mario en torneos frenéticos.",
            price: 49.99,
            promotion: 10,
            company_id:1,
            category_id:1,
        },
        {
            id: 6,
            image: "https://cdn1.epicgames.com/spt-assets/5b305f4af434477089ef3ba24d93fd3e/star-trek-voyager--across-the-unknown-x7jcw.jpg",
            name: "Star Trek: Voyager - Across the Unknown",
            release_date: "2026-02-18",
            description: "Aventura espacial narrativa basada en la famosa serie de ciencia ficción.",
            price: 59.99,
            promotion: 12,
            company_id:1,
            category_id:1,
        },
        {
            id: 7,
            image: "https://cdn.ageofempires.com/aoe/wp-content/uploads/2026/01/Pre-Order_The_Last_Chieftains_mutiplatform.webp",
            name: "Age of Empires II: The Last Chieftains",
            release_date: "2026-02-17",
            description: "Expansión del clásico RTS con nuevas civilizaciones y campañas históricas.",
            price: 29.99,
            promotion: 5,
            company_id:1,
            category_id:1,
        },
        {
            id: 8,
            image: "https://i.3djuegos.com/juegos/20240/styx_blades_of_greed/fotos/ficha/styx_blades_of_greed-5948007.jpg",
            name: "Styx: Blades of Greed",
            release_date: "2026-02-19",
            description: "Juego de sigilo y acción con ambientación oscura y mecánicas de infiltración.",
            price: 59.99,
            promotion: 18,
            company_id:1,
            category_id:1,
        },
        {
            id: 9,
            image: "https://cdn.loaded.com/496x700/media/catalog/product/h/i/high_on_life_2_pc_1.png",
            name: "High on Life 2",
            release_date: "2026-02-13",
            description: "Secuela del shooter cómico con armas parlantes y humor irreverente.",
            price: 69.99,
            promotion: 15,
            company_id:1,
            category_id:1,
        },
        {
            id: 10,
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202512/1010/f3e1293fd32c6d4ab71d9d2b8150c84c669dfa9204acf79e.png",
            name: "Ride 6",
            release_date: "2026-02-12",
            description: "Simulador de motociclismo con circuitos realistas y físicas avanzadas.",
            price: 59.99,
            promotion: 10,
            company_id:1,
            category_id:1,
        }

    ],
}

const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{

    },
});


const { reducer: productsReducer } = dataSlice;
export default productsReducer;

