import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "./productSlice"
import { User } from "./userSlice"

export const storageCarts = "storageCarts";

export type Items = {
    product: Products,
    count: number,
}

export type Cart = {
    user_id: User,
    product_ids: Items[],
    total: number,
}

export interface CartStates {
    carts: Cart[],
}

const initialState: CartStates = {
    carts: localStorage.getItem(storageCarts)
        ? JSON.parse(localStorage.getItem(storageCarts) as string)
        : null,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCart:(state,action:PayloadAction<{user:User,product:Products}>)=>{
            
            const cart = state.carts.find((cart:Cart)=> cart.user_id.id===action.payload.user.id);
            if(cart){
                const item = cart.product_ids.find((product:Items)=> product.product.id === action.payload.product.id);
                if (item){
                    item.count++;
                }else{
                    cart.product_ids.push({
                        product:action.payload.product,
                        count:1,
                    });
                }
                for(let product of cart.product_ids){
                    cart.total = Number((product.count * (product.product.price * (1-(product.product.promotion/100)))).toFixed(2));
                }
            }
        },
        clearCart:(state,action:PayloadAction<User>)=>{
            const cart = state.carts.find((cart:Cart)=> cart.user_id.id===action.payload.id);
            if (cart) cart.product_ids = [];
        }
    },
});

export const { addCart,clearCart } = cartSlice.actions;
const { reducer: cartReducer } = cartSlice;
export default cartReducer;
