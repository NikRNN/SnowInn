import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkApi , StateSchema } from "app/providers/StoreProvider/config/types";
import { ValidateProfileError} from "../../const/consts";
import { getProfileForm } from "../../selectors/editProfileCardSelectors";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import type { Profile } from "entities/Profile";

export const updateProfileData = createAsyncThunk<Profile, void, {rejectValue: ValidateProfileError[], extra : ThunkApi}>( // типы: profile - то, что вернется в случае успеха, входных данных нет, и тип ошибки
    "profile/updateProfileData", // первый аргумент, название thunk
    async (profileId, thunkAPI) => {
        const formData = getProfileForm(thunkAPI.getState() as StateSchema);

        const errors = validateProfileData(formData);
        try {
            if (errors.length) {
                return thunkAPI.rejectWithValue(errors);
            }
            const response = await thunkAPI.extra.api.put<Profile>(`/profile/${formData?.id}`, formData); // полный адрес запроса идет из $api

            if (!response.data) {
                throw new Error();
            }

            return response.data; // автоматически создает экшн с type login/loginByUsername/fulfilled и payload response.data
        } catch (error) {
            return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
