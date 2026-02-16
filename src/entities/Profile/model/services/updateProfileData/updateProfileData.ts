import { createAsyncThunk } from "@reduxjs/toolkit";
import type { StateSchema, ThunkApi } from "app/providers/StoreProvider";
import { ValidateProfileError, type Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<Profile, string, {rejectValue: ValidateProfileError[], extra : ThunkApi}>( // типы: profile - то, что вернется в случае успеха, входных данных нет, и тип ошибки
    "profile/updateProfileData", // первый аргумент, название thunk
    async (profileId, thunkAPI) => {
        const formData = getProfileForm(thunkAPI.getState() as StateSchema);

        const errors = validateProfileData(formData);
        try {
            if (errors.length) {
                return thunkAPI.rejectWithValue(errors);
            }
            const response = await thunkAPI.extra.api.put<Profile>(`/profile${profileId}`, formData); // полный адрес запроса идет из $api

            if (!response.data) {
                throw new Error();
            }

            return response.data; // автоматически создает экшн с type login/loginByUsername/fulfilled и payload response.data
        } catch (error) {
            return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
