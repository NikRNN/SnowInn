import { createAsyncThunk } from "@reduxjs/toolkit";
import type { StateSchema, ThunkApi } from "app/providers/StoreProvider";

import {
    getArticleListIsInited,
} from "../../selectors/articlesListSelector";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlesListActions } from "../../slices/addArticlesList";

export const fetchInitArticlesPage = createAsyncThunk<void, void, {rejectValue: string, extra : ThunkApi, state: StateSchema}>( // типы: массив Comment - то, что вернется в случае успеха, второе - входные данные thunk и тип ошибки
    "articlesList/fetchInitArticlesPage", // первый аргумент, название thunk
    async (_, thunkAPI) => {
        const inited = getArticleListIsInited(thunkAPI.getState()); // как и сверху, тут я получю отдельную часть стейта;для использования getState внутри селектора не забудь передать стэйт в третий дженерик
        if (!inited) {
            thunkAPI.dispatch(articlesListActions.initState());
            thunkAPI.dispatch(fetchArticlesList({ page: 1 }));
        }
    },
);
