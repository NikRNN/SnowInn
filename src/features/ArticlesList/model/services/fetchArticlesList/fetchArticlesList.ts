import { createAsyncThunk } from "@reduxjs/toolkit";
import type { StateSchema, ThunkApi } from "app/providers/StoreProvider";
import type { Article } from "entities/Article";
import { getArticleListLimit } from "../../selectors/articlesListSelector";

interface fetchArticlesListProps {
    page?: number
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, {rejectValue: string, extra : ThunkApi, state: StateSchema}>( // типы: массив Comment - то, что вернется в случае успеха, второе - входные данные thunk и тип ошибки
    "articlesList/fetchArticlesList", // первый аргумент, название thunk
    async (props, thunkAPI) => {
        const { page = 1 } = props;
        const limit = getArticleListLimit(thunkAPI.getState()); // для использования getState внутри селектора не забудь передать стэйт в третий дженерик
        try {
            const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
                params: {
                    _expand: "user",
                    _limit: limit, // см документацию к json server по всему этому аргументу
                    _page: page, // -/-
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
