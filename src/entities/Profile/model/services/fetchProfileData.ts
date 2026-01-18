import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "shared/config/i18n/i18n";
import type { ThunkApi } from "app/providers/StoreProvider";
import type { Profile } from "../types/profile";

export const fetchProfileData = createAsyncThunk<Profile, void, {rejectValue: string, extra : ThunkApi}>( // типы: юзер - то, что вернется в случае успеха, логин пропс - входные данные thunk и тип ошибки
    "profile/fetchProfileData", // первый аргумент, название thunk
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>("/profile"); // полный адрес запроса идет из $api

            return response.data; // автоматически создает экшн с type login/loginByUsername/fulfilled и payload response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(i18n.t("Неверный логин или пароль"));
        }
    },
);
