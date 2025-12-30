import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_USER_LOCALSTORAGE } from "shared/const/localstorage";
import { UserSchema, User } from "../types/user";

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(AUTH_USER_LOCALSTORAGE);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(AUTH_USER_LOCALSTORAGE);
        },
    },
});

export const { actions: userActions } = userSlice; // перемеиновал экспорт
export const { reducer: userReducer } = userSlice;
