import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "../../components/User/UserCreate";
import { LoginState } from "../../components/User/UserLogin";

export const loginUserText = "actualUser";
export const usersInfo = "userList";

export type User = {
    id: number;
    isLogged: boolean;
    name: string;
    paternal_surname: string;
    maternal_surname: string | null;
    rfc: string;
    datebirth: string;
    email: string;
    password: string;
};

export interface UserState {
    users: User[];
    actualUser: User | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

// Thunk para login
export const loginUserThunk = createAsyncThunk<User, LoginState, { state: { user: UserState } }>(
    "users/loginUserThunk",
    async (credentials, { getState, rejectWithValue }) => {
        const state = getState();
        const exist = state.user.users.find(
        u => u.email === credentials.email && u.password === credentials.password
        );
        if (!exist) {
            return rejectWithValue("Usuario no encontrado");
        }
        localStorage.setItem(loginUserText, JSON.stringify(exist));
        return exist;
    }
);

// Thunk para crear usuario
export const createUserThunk = createAsyncThunk<User, FormState, { state: { user: UserState } }>(
    "users/createUserThunk",
    async (form, { getState, rejectWithValue }) => {
        const state = getState();
        const exist = state.user.users.some(u => u.email === form.email);

        if (exist) {
            return rejectWithValue("El usuario ya existe");
        }

        const idAux = state.user.users.length + 1;
        const user: User = {
        id: idAux,
        isLogged: false,
        name: form.name.toUpperCase(),
        paternal_surname: form.paternal_surname.toUpperCase(),
        maternal_surname: form.maternal_surname
            ? form.maternal_surname.toUpperCase()
            : "",
        rfc: form.rfc.toUpperCase(),
        datebirth: form.datebirth,
        email: form.email,
        password: form.password,
        };

        const updatedUsers = [...state.user.users, user];
        localStorage.setItem(usersInfo, JSON.stringify(updatedUsers));
        localStorage.setItem(loginUserText, JSON.stringify(user));
        
        return user;
    }
);

// Helper para inicializar la lista de usuarios
const userListArray = (): User[] => {
    const users = localStorage.getItem(usersInfo)
        ? JSON.parse(localStorage.getItem(usersInfo) as string)
        : [];
    return users;
};

const initialState: UserState = {
    users: userListArray(),
    actualUser: localStorage.getItem(loginUserText)
        ? JSON.parse(localStorage.getItem(loginUserText) as string)
        : null,
    status: "idle",
    error: null,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        closeUser: state => {
        localStorage.setItem(loginUserText, JSON.stringify(null));
        state.actualUser = null;
        },
    },
    extraReducers: builder => {
        builder
        .addCase(loginUserThunk.pending, state => {
            state.status = "loading";
            state.error = null;
        })
        .addCase(loginUserThunk.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.actualUser = action.payload;
        })
        .addCase(loginUserThunk.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload as string;
        })
        .addCase(createUserThunk.pending, state => {
            state.status = "loading";
            state.error = null;
        })
        .addCase(createUserThunk.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.users.push(action.payload);
            state.actualUser = action.payload;
        })
        .addCase(createUserThunk.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload as string;
        });
    },
});

export const { closeUser } = userSlice.actions;
export default userSlice.reducer;