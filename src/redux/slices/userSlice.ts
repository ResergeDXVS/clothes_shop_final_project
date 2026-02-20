import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FormState } from "../../components/User/UserCreate";
import { LoginState } from "../../components/User/UserLogin";


export type User = {
    id: number,
    isLogged: boolean,
    name: string,
    paternal_surname: string,
    maternal_surname: string | null,
    rfc: string,
    datebirth: string,
    email: string,
    password: string,
}

export interface UserState {
    users: User[],
}

const initialState: UserState = {
    users: [],
}

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        createUser:(state,action:PayloadAction<FormState>)=>{
            const exist = state.users.some((user:User)=> user.email===action.payload.email);
            if (!exist){
                const user:User={
                    id:state.users[-1]?.id+1,
                    isLogged: false,
                    name:action.payload.name,
                    paternal_surname: action.payload.paternal_surname,
                    maternal_surname: action.payload.maternal_surname === "" ? action.payload.maternal_surname : "",
                    rfc: action.payload.rfc,
                    datebirth: action.payload.datebirth,
                    email: action.payload.email,
                    password: action.payload.password
                }
                state.users.push(user);
            } 
        },
        loginUser:(state,action:PayloadAction<LoginState>)=>{
            const exist = state.users.find(
                (user:User)=> 
                    user.email===action.payload.email && 
                    user.password === action.payload.password
            );
            if (exist) exist.isLogged=true;
        },
        updateUser:(state,action:PayloadAction<User>)=>{
            let user = state.users.find((user:User)=> user.id===action.payload.id);
            if (user){
                user = action.payload;
            }
        }
    }
});

export const { createUser, updateUser, loginUser } = userSlice.actions;
const { reducer: userReducer } = userSlice;
export default userReducer;
