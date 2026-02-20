import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "../slices/userSlice";
import productsReducer from "../slices/productSlice";
import dataReducer from "../slices/dataSlice";
import cartReducer from "../slices/cartSlice";




export const store = configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer,
        product:productsReducer,
        data:dataReducer,
    }
});




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;