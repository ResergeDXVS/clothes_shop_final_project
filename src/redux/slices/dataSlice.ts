import { createSlice } from "@reduxjs/toolkit";

export type Company = {
    id: number,
    name: string,
    image: string,
}

export type Category = {
    id: number,
    category: string,
}

export interface DataState {
    companies:Company[],
    categories:Category[]
}

const initialState: DataState = {
    companies:[
        { id: 1, name: "Sony Interactive Entertainment", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sony_Interactive_Entertainment_logo_%282016%29.svg/330px-Sony_Interactive_Entertainment_logo_%282016%29.svg.png" },
        { id: 2, name: "Microsoft Gaming (Xbox)", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Xbox_Game_Studios_logotype.png" },
        { id: 3, name: "Nintendo", image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg" },
        { id: 4, name: "Pokémon", image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Pokemon_logo.png" },
        { id: 5, name: "Electronic Arts (EA)", image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Electronic_Arts_2020.svg" },
        { id: 6, name: "Activision Blizzard", image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Activision_Blizzard_logo.svg" },
        { id: 7, name: "Ubisoft", image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg" },
        { id: 8, name: "Bandai Namco Entertainment", image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Bandai_Namco_old.svg" },
        { id: 9, name: "Square Enix", image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Square_Enix_logo.svg" },
        { id: 10, name: "SEGA", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/1280px-SEGA_logo.svg.png" },
    ],
    categories:[
        {id:1,category:"Consolas"},
        {id:2,category:"Juegos"},
        {id:3,category:"Controles"},
        {id:4,category:"Pases"},
        {id:5,category:"Accesorios"},
    ],
}

const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{},
})

const { reducer: dataReducer} = dataSlice;
export default dataReducer;