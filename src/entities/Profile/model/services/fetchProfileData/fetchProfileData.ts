import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkApi } from "app/providers/StoreProvider";
import { ValidateProfileError, type Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<Profile, void, {rejectValue: ValidateProfileError[], extra : ThunkApi}>( // типы: юзер - то, что вернется в случае успеха, логин пропс - входные данные thunk и тип ошибки
    "profile/fetchProfileData", // первый аргумент, название thunk
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>("/profile"); // полный адрес запроса идет из $api

            if (!response.data) {
                throw new Error();
            }

            return response.data; // автоматически создает экшн с type login/loginByUsername/fulfilled и payload response.data
        } catch (error) {
            return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
