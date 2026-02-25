import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormMethodState } from "../../components/Cart/PaymentMethod";
import { useAppSelector } from "../store/store";
import { User } from "./userSlice";


export type PaymentMethod = {
    user_id: number,
    id: number,
    card_number: number,
    expiration: number,
    cvc: number,
};

export interface PaymentState {
    payment: PaymentMethod[],
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

export const createPaymentThunk = createAsyncThunk<PaymentMethod, FormMethodState, 
    {state: 
        { 
            payment: PaymentState; 
            user: { actualUser: User | null } 
        }
    }>(
    "payment/createPaymentThunk",
    async (form, { getState, rejectWithValue }) => {
        
        const state = getState();
        const actualUser = state.user.actualUser;
        if (!actualUser){
            rejectWithValue("No se ha iniciado sesión.");
        }
        const exist = state.payment.payment.some(u => 
            (u.card_number === form.card_number) &&
            (u.user_id === actualUser?.id)
        );

        if (exist ) {
            return rejectWithValue("La tarjeta ya está registrada por el usuario");
        }

        const idAux = state.payment.payment.length + 1;
        if (actualUser?.id === undefined) {
            return rejectWithValue("No se ha iniciado sesión.");
        }
        const newPayment: PaymentMethod = {
            id: idAux,
            user_id: actualUser.id,
            card_number: form.card_number,
            expiration: form.expiration,
            cvc: form.cvc,
        };

        state.payment.payment = [...state.payment.payment, newPayment];
        return newPayment;
    }
);


const initialState: PaymentState = {
    payment: [],
    status: "idle",
    error: null,
};

const paymentMethodSlice = createSlice({
    name: "paymentMethod",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(createPaymentThunk.pending, state => {
            state.status = "loading";
            state.error = null;
        })
        .addCase(createPaymentThunk.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.payment = [...state.payment, action.payload];
        })
        .addCase(createPaymentThunk.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload as string;
        });
    },
    
});

;
const { reducer: paymentReducer } = paymentMethodSlice;
export default paymentReducer;