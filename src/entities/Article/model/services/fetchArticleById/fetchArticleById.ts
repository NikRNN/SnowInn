import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkApi } from "app/providers/StoreProvider";
import type { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<Article, string, {rejectValue: string, extra : ThunkApi}>( 
    "articleDetails/fetchArticleById", // первый аргумент, название thunk
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: "user",
                },
            }); // полный адрес запроса идет из $api, адрес смотри в базе данных

            if (!response.data) {
                throw new Error();
            }

            return response.data; // автоматически создает экшн с type articles/fetchArticleById/fulfilled и payload response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("error");
        }
    },
);
