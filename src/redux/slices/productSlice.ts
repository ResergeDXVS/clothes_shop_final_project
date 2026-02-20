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
        {id: 1,image: "https://cdn1.epicgames.com/spt-assets/7044c52c68ea48519b725989afad3093/ride-6-11aph.jpg",name: "Nioh 3",release_date: "2026-02-01",description: "Acción y RPG ambientado en Japón feudal con combates intensos y mecánicas de samuráis.",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
        {id: 2,image: "https://m.media-amazon.com/images/I/91nBIfG5loL._AC_UF1000,1000_QL80_.jpg",name: "Dragon Quest VII Reimagined",release_date: "2026-02-05",description: "Remake del clásico JRPG con gráficos modernos y nuevas mecánicas narrativas.",price: 1059.99,promotion: 10,company_id:9,category_id:2,},
        {id: 3,image: "https://cdn1.epicgames.com/spt-assets/b2e589fac93746fc8d20b4177f5b3a60/resident-evil-requiem-g8jiq.jpg",name: "Resident Evil Requiem",release_date: "2026-02-10",description: "Nueva entrega de survival horror con atmósfera oscura y enemigos icónicos.",price: 69.99,promotion: 20,company_id:10,category_id:2,},
        {id: 4,image: "https://digitalworldpsn.com/wp-content/uploads/2025/09/Screenshot_2.png",name: "Hollow Knight: Switch 2 Edition",release_date: "2026-02-12",description: "Versión mejorada del metroidvania con soporte para la nueva consola de Nintendo.",price: 1039.99,promotion: 5,company_id:3,category_id:2,},
        {id: 5,image: "https://images.nintendolife.com/cb661632d8e7e/mario-tennis-fever-cover.cover_300x.jpg",name: "Mario Tennis Fever",release_date: "2026-02-12",description: "Juego deportivo arcade con personajes clásicos de Mario en torneos frenéticos.",price: 1049.99,promotion: 10,company_id:3,category_id:2,},
        {id: 6,image: "https://cdn1.epicgames.com/spt-assets/5b305f4af434477089ef3ba24d93fd3e/star-trek-voyager--across-the-unknown-x7jcw.jpg",name: "Star Trek: Voyager - Across the Unknown",release_date: "2026-02-18",description: "Aventura espacial narrativa basada en la famosa serie de ciencia ficción.",price: 1059.99,promotion: 12,company_id:8,category_id:2,},
        {id: 7,image: "https://cdn.ageofempires.com/aoe/wp-content/uploads/2026/01/Pre-Order_The_Last_Chieftains_mutiplatform.webp",name: "Age of Empires II: The Last Chieftains",release_date: "2026-02-17",description: "Expansión del clásico RTS con nuevas civilizaciones y campañas históricas.",price: 1029.99,promotion: 5,company_id:2,category_id:2,},
        {id: 8,image: "https://i.3djuegos.com/juegos/20240/styx_blades_of_greed/fotos/ficha/styx_blades_of_greed-5948007.jpg",name: "Styx: Blades of Greed",release_date: "2026-02-19",description: "Juego de sigilo y acción con ambientación oscura y mecánicas de infiltración.",price: 1059.99,promotion: 18,company_id:7,category_id:2,},
        {id: 9,image: "https://cdn.loaded.com/496x700/media/catalog/product/h/i/high_on_life_2_pc_1.png",name: "High on Life 2",release_date: "2026-02-13",description: "Secuela del shooter cómico con armas parlantes y humor irreverente.",price: 1069.99,promotion: 15,company_id:2,category_id:2,},
        {id: 10,image: "https://image.api.playstation.com/vulcan/ap/rnd/202512/1010/f3e1293fd32c6d4ab71d9d2b8150c84c669dfa9204acf79e.png",name: "Ride 6",release_date: "2026-02-12",description: "Simulador de motociclismo con circuitos realistas y físicas avanzadas.",price: 1059.99,promotion: 10,company_id:8,category_id:2,},
        { id: 101, name: "PlayStation 5", release_date: "2026-03-01", description: "Nueva generación de consolas con soporte 8K y SSD ultrarrápido.", price: 12599.99, promotion: 5, company_id: 1, category_id: 1, image: "https://www.rac.mx/wp-content/uploads/2024/11/consola-playstation-5-PS5-1.jpg" },
        { id: 102, name: "Xbox Series Z", release_date: "2026-03-05", description: "Consola de Microsoft con integración total en la nube.", price: 11549.99, promotion: 10, company_id: 2, category_id: 1, image: "https://m.media-amazon.com/images/I/61WV2vIMfFL._AC_UF1000,1000_QL80_.jpg" },
        { id: 103, name: "Nintendo Switch 2", release_date: "2026-03-10", description: "Versión mejorada con pantalla OLED 4K y mejor batería.", price: 1399.99, promotion: 8, company_id: 3, category_id: 1, image: "https://cdn2.gameplanet.com/wp-content/uploads/2025/06/04204221/045496885816-CON_01-NSW2.jpg" },
        { id: 104, name: "Steam Deck Pro", release_date: "2026-03-12", description: "Consola portátil para juegos de PC con mayor potencia.", price: 9499.99, promotion: 12, company_id: 10, category_id: 1, image: "https://m.media-amazon.com/images/I/61qXkFb0W-L._AC_UF894,1000_QL80_.jpg" },
        { id: 105, name: "SEGA Neptune", release_date: "2026-03-15", description: "Nueva consola retro-modern de SEGA.", price: 2299.99, promotion: 15, company_id: 10, category_id: 1, image: "https://imagenes.hobbyconsolas.com/files/image_640_360/uploads/imagenes/2024/07/01/6903c886013ee.jpeg" },
        { id: 106, name: "PlayStation Portable Neo", release_date: "2026-03-20", description: "Consola portátil de Sony con integración PS6.", price: 1349.99, promotion: 10, company_id: 1, category_id: 1, image: "https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2023/08/23/16928157650359.jpg" },
        { id: 107, name: "Xbox Handheld", release_date: "2026-03-25", description: "Consola portátil de Microsoft con Game Pass integrado.", price: 1399.99, promotion: 5, company_id: 2, category_id: 1, image: "https://www.cnet.com/a/img/resize/5fc2c04b7fdb26934a31c49ab7e9b090a68c3cc5/hub/2025/06/17/3694ad3b-aec7-4be1-985a-b6f43ffc9f0e/rog-xbox-ally-x.jpg?auto=webp&fit=crop&height=1200&width=1200" },
        { id: 108, name: "Nintendo Classic Mini 64", release_date: "2026-03-28", description: "Versión mini de la clásica Nintendo 64.", price: 2129.99, promotion: 20, company_id: 3, category_id: 1, image: "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2017/07/18/9e873c03-1023-4944-8f3d-41d4c8538fb8/nintendo-n64-mini-classic-modelo-de-caja" },
        { id: 109, name: "Bandai Namco Arcade Neo", release_date: "2026-04-01", description: "Consola arcade casera con títulos clásicos.", price: 9249.99, promotion: 15, company_id: 8, category_id: 1, image: "https://m.media-amazon.com/images/I/61qjsTdxdDL._AC_UF894,1000_QL80_.jpg" },
        { id: 110 ,name: "GameCube",release_date: "2026-06-15",description: "Consola Retro de Nintendo.",price: 349.99,promotion: 10,company_id: 1,category_id: 1, image: "https://museodeinformatica.org.ar/wp-content/uploads/2015/01/1024px-Gamecube-console.jpg"},
        { id: 201, name: "DualSense Pro", release_date: "2026-03-01", description: "Control mejorado con gatillos adaptativos y batería extendida.", price: 1279.99, promotion: 10, company_id: 3, category_id: 3, image: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-edge-listing-thumb-01-en-23aug22?$facebook$" },
        { id: 202, name: "Xbox Elite Controller 3", release_date: "2026-03-05", description: "Control premium con piezas intercambiables.", price: 2149.99, promotion: 5, company_id: 2, category_id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WreR-zcKw23cIHoPHfSrvX0YqH9JazxIpQ&s" },
        { id: 203, name: "Nintendo Joy-Con 2", release_date: "2026-03-10", description: "Nueva versión con mejor ergonomía y batería.", price: 789.99, promotion: 8, company_id: 3, category_id: 3, image: "https://m.media-amazon.com/images/I/61ieehjfCaL._AC_UF1000,1000_QL80_.jpg" },
        { id: 204, name: "Pokémon Pokéball", release_date: "2026-03-12", description: "Control temático de Pokémon en forma de pokeball con vibración especial.", price: 669.99, promotion: 12, company_id: 4, category_id: 3, image: "https://i.ebayimg.com/images/g/UwMAAOSw1pJlMJIH/s-l1600.jpg" },
        { id: 205, name: "EA Sports Controller", release_date: "2026-03-15", description: "Control optimizado para juegos deportivos.", price: 559.99, promotion: 15, company_id: 5, category_id: 3, image: "https://m.media-amazon.com/images/I/61TqEHXeYUL.jpg" },
        { id: 206, name: "Activision Shooter Pad", release_date: "2026-03-20", description: "Control diseñado para shooters con gatillos rápidos.", price: 499.99, promotion: 10, company_id: 6, category_id: 3, image: "https://i.blogs.es/6e158a/pad-20oficial-20cod-20boii/450_1000.webp" },
        { id: 207, name: "Ubisoft Motion Controller", release_date: "2026-03-25", description: "Control con sensores de movimiento para VR.", price: 429.99, promotion: 5, company_id: 7, category_id: 3, image: "https://m.media-amazon.com/images/I/419ZABKvgPL.jpg" },
        { id: 208, name: "Bandai Namco Fight Stick", release_date: "2026-03-28", description: "Arcade stick para juegos de pelea.", price: 349.99, promotion: 20, company_id: 8, category_id: 3, image: "https://cdn.shopify.com/s/files/1/1691/7407/files/Gamestation_Retro_Arcade_Stick_480x480.jpg?v=1736199842" },
        { id: 209, name: "Playstation Controller", release_date: "2026-04-01", description: "Control temático de Playstation.", price: 369.99, promotion: 15, company_id: 1, category_id: 3, image: "https://m.media-amazon.com/images/I/810chUsaqFL.jpg" },
        { id: 210, name: "SEGA Retro Pad", release_date: "2026-04-05", description: "Control inspirado en el clásico Genesis.", price: 349.99, promotion: 10, company_id: 10, category_id: 3, image: "https://m.media-amazon.com/images/I/71eRwkc59UL._AC_UF1000,1000_QL80_.jpg" },
        { id: 301, name: "PlayStation Plus Premium 1 Año", release_date: "2026-03-01", description: "Suscripción anual con juegos y beneficios exclusivos.", price: 119.99, promotion: 10, company_id: 1, category_id: 4, image: "https://image.api.playstation.com/vulcan/ap/rnd/202205/0914/pBGJFcrGS7YowmrRb36jMFHA.png?w=440" },
        { id: 302, name: "Xbox Game Pass Ultimate 1 Año", release_date: "2026-03-05", description: "Acceso ilimitado a cientos de juegos.", price: 129.99, promotion: 5, company_id: 2, category_id: 4, image: "https://http2.mlstatic.com/D_Q_NP_781940-MLA97123881646_112025-O.webp" },
        { id: 303, name: "Nintendo Online Expansion Pack", release_date: "2026-03-10", description: "Acceso a juegos retro y contenido adicional.", price: 379.99, promotion: 8, company_id: 3, category_id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQX3_Rp61ypn-vW2OATEr1gfe1kcN3G1G5fg&s" },
        { id: 304, name: "Pokémon Legends ZA DLC", release_date: "2026-03-12", description: "Contenido exclusivo para juegos Pokémon Leyendas ZA", price: 349.99, promotion: 12, company_id: 4, category_id: 4, image: "https://cdn.loaded.com/496x700/media/catalog/product/p/o/poke_mon_legends-_z-a_mega_dimension.png" },
        { id: 305, name: "EA Play Pro 1 Año", release_date: "2026-03-15", description: "Acceso anticipado a juegos EA.", price: 99.99, promotion: 15, company_id: 5, category_id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-428k3JeAzBnbAE9dN1TZNLKSIGKpu9BYg&s" },
        { id: 306, name: "Activision Season Pass", release_date: "2026-03-20", description: "Contenido adicional para Call of Duty.", price: 59.99, promotion: 10, company_id: 6, category_id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGRgWElMA1Hn0kaWXJA2497EpvGkfHrWTdQ&s" },
        { id: 307, name: "Ubisoft+ 1 Año", release_date: "2026-03-25", description: "Acceso a todo el catálogo Ubisoft.", price: 119.99, promotion: 5, company_id: 7, category_id: 4, image: "https://assets.xboxservices.com/assets/9c/e4/9ce45273-8bcc-42bd-ab03-623b5ba12b8e.jpg?n=Ubisoft-Plus_Sharing_200x200.jpg" },
        { id: 308, name: "Super Smash Bros Pase de Combatientes", release_date: "2024-03-28", description: "Contenido adicional para juegos de pelea.", price: 49.99, promotion: 20, company_id: 8, category_id: 4, image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70070000003621/af29370758f00ce59d09d823b6555958372b015ff48a0460a2f96f439bae35bc" },
        { id: 401, name: "PlayStation VR 3", release_date: "2026-03-01", description: "Nueva generación de realidad virtual para PS6.", price: 6399.99, promotion: 10, company_id: 1, category_id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArHpkqxmtmiqOc_KWa7UAycO3KReEG0tTUg&s" },
        { id: 402, name: "Xbox Wireless Headset 2", release_date: "2026-03-05", description: "Auriculares inalámbricos con sonido espacial.", price: 1149.99, promotion: 5, company_id: 2, category_id: 5, image: "https://cdn2.gameplanet.com/wp-content/uploads/2022/09/04055349/xbx_wireless_headset_2_1.jpg" },
        { id: 403, name: "Nintendo Switch Dock 2", release_date: "2026-03-10", description: "Dock mejorado con salida 4K.", price: 599.99, promotion: 8, company_id: 3, category_id: 5, image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%202/Accessories/Docks/123791-nintendo-switch-2-dock-set-package-front-2000x2000" },
        { id: 404, name: "Pokémon Themed Headphones", release_date: "2026-03-12", description: "Auriculares con diseño de Pikachu.", price: 479.99, promotion: 12, company_id: 4, category_id: 5, image: "https://a.storyblok.com/f/178900/640x640/c7fc0ba24b/cr_pikachu_01.png/m/filters:quality(95)format(webp)" },
        { id: 405, name: "EA Sports Motion Sensor", release_date: "2026-03-15", description: "Sensor de movimiento para juegos deportivos.", price: 359.99, promotion: 15, company_id: 5, category_id: 5, image: "https://m.media-amazon.com/images/I/81cgo-6RGzL._AC_UF1000,1000_QL80_.jpg" },
        { id: 406, name: "Activision Gaming Keyboard", release_date: "2026-03-20", description: "Teclado mecánico optimizado para shooters.", price: 129.99, promotion: 10, company_id: 6, category_id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5wvqKlaXZFuqqCnCDc1g2hKtX9q3pv-gUg&s" },
        { id: 407, name: "Ubisoft VR Gloves", release_date: "2026-03-25", description: "Guantes hápticos para experiencias VR.", price: 199.99, promotion: 5, company_id: 7, category_id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjq-bG_oxaAZFIt5flAEXA_qrK9s2oP7jo8A&s" },
        { id: 408, name: "Bandai Namco Fight Pad", release_date: "2026-03-28", description: "Control especial para juegos de pelea.", price: 89.99, promotion: 20, company_id: 8, category_id: 5, image: "https://m.media-amazon.com/images/I/714guCrG5IL._AC_UF1000,1000_QL80_.jpg" },
        { id: 409, name: "Square Enix Collector Stand", release_date: "2026-04-01", description: "Base coleccionable para consolas JRPG.", price: 49.99, promotion: 15, company_id: 9, category_id: 5, image: "https://cdn11.bigcommerce.com/s-6rs11v9w2d/images/stencil/1280x1280/products/3643/18825/FFIX_Acrylic_Stand_09__02475.1746813892.jpg?c=1" },
        { id: 410, name: "SEGA Retro Headset", release_date: "2026-04-05", description: "Auriculares inspirados en SEGA Genesis.", price: 69.99, promotion: 10, company_id: 10, category_id: 5, image: "https://segaretro.org/images/4/43/Segavr_physical01.jpg" },
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

