import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkApi } from "app/providers/StoreProvider";
import type { Article } from "entities/Article";

export const fetchArticlesList = createAsyncThunk<Article[], void, {rejectValue: string, extra : ThunkApi}>( // типы: массив Comment - то, что вернется в случае успеха, стринг - входные данные thunk и тип ошибки
    "articlesList/fetchArticlesList", // первый аргумент, название thunk
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
                params: {

                    _expand: "user",
                },
            }); // полный адрес запроса идет из $api, адрес смотри в базе данных; тут сложный конфиг, см документацию по fake json раздел тношения

            if (!response.data) {
                throw new Error();
            }

            return response.data; // автоматически создает экшн с type articles/fetchCommentsArticleId/fulfilled и payload response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("error");
        }
    },
);
