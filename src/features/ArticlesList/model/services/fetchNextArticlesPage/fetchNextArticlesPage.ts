import { createAsyncThunk } from "@reduxjs/toolkit";
import type { StateSchema, ThunkApi } from "app/providers/StoreProvider";

import {
    getArticleListHasMore, getArticleListPageNum, getArticleListIsLoading,
} from "../../selectors/articlesListSelector";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlesListActions } from "../../slices/addArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<void, void, {rejectValue: string, extra : ThunkApi, state: StateSchema}>( // типы: массив Comment - то, что вернется в случае успеха, второе - входные данные thunk и тип ошибки
    "articlesList/fetchNextArticlesPage", // первый аргумент, название thunk
    async (_, thunkAPI) => {
        const hasMore = getArticleListHasMore(thunkAPI.getState()); // как и сверху, тут я получю отдельную часть стейта;для использования getState внутри селектора не забудь передать стэйт в третий дженерик
        const page = getArticleListPageNum(thunkAPI.getState());
        const isLoading = getArticleListIsLoading(thunkAPI.getState());

        if (hasMore && !isLoading) {
            thunkAPI.dispatch(fetchArticlesList({ page: page + 1 }));
            thunkAPI.dispatch(articlesListActions.setPage(page + 1));
        }
    },
);
