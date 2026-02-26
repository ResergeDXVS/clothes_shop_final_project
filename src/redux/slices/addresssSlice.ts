import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddressMethodState } from "../../components/Cart/PaymentMethod";
import { User } from "./userSlice";


export type address = {
    user_id: number,
    id: number,
    address:string,
    internal_number:string,
    external_number:string,
    postal:string,
    suburb:string,
    contry:string,

};

export interface AddressState {
    address: address[],
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

export const createAddressThunk = createAsyncThunk<
    address,
    AddressMethodState,
    {
        state: {
            addresses: AddressState;
            user: { actualUser: User | null };
        };
        rejectValue: string;
    }
    >(
    "address/createAddressThunk",
    async (form, { getState, rejectWithValue }) => {

        const state = getState();
        const actualUser = state.user.actualUser;

        if (!actualUser) {
        return rejectWithValue("No se ha iniciado sesión.");
        }

        const exist = state.addresses.address.some(
        (u) =>
            u.address === form.address &&
            u.user_id === actualUser.id
        );

        if (exist) {
            return rejectWithValue("La dirección ya está registrada por el usuario");
        }
        if( form.address === "" || form.contry==="" || form.external_number ==="" || form.postal === "" || form.suburb===""){
            return rejectWithValue("La dirección se encuentra incompleta");
        }

        const idAux = state.addresses.address.length + 1;

        const newAddress: address = {
            id:idAux,
            user_id:actualUser.id,
            address:form.address,
            internal_number:form.internal_number,
            external_number:form.external_number,
            postal:form.postal,
            suburb:form.suburb,
            contry:form.contry,
        };

        return newAddress;
    }
);


const initialState: AddressState = {
    address: [],
    status: "idle",
    error: null,
};

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(createAddressThunk.pending, state => {
            state.status = "loading";
            state.error = null;
        })
        .addCase(createAddressThunk.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.address = [...state.address, action.payload];
        })
        .addCase(createAddressThunk.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload as string;
        });
    },
    
});

;
const { reducer: addressReducer } = addressSlice;
export default addressReducer;