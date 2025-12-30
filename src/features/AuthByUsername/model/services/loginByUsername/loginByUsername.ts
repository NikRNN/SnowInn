import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { AUTH_USER_LOCALSTORAGE } from "shared/const/localstorage";

interface LoginProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginProps, {rejectValue: string}>(
    "login/loginByUsername",
    async (loginData:LoginProps, thunkAPI) => {
        try {
            const response = await axios.post<User>("http://localhost:8000/login", loginData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(AUTH_USER_LOCALSTORAGE, JSON.stringify(response.data));// записал в localstorage данные по ключу
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(i18n.t("Неверный логин или пароль"));
        }
    },
);
