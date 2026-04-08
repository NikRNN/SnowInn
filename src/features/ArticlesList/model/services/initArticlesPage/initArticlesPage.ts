import { createAsyncThunk } from "@reduxjs/toolkit";
import type { StateSchema, ThunkApi } from "app/providers/StoreProvider";

import { SortTypeOrder } from "shared/types";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import {
    getArticleListIsInited,
} from "../../selectors/articlesListSelector";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { addArticlesListActions } from "../../slices/addArticlesListSlice";

export const fetchInitArticlesPage = createAsyncThunk<void, URLSearchParams, {rejectValue: string, extra : ThunkApi, state: StateSchema}>( // типы: массив Comment - то, что вернется в случае успеха, второе - входные данные thunk и тип ошибки
    "articlesList/fetchInitArticlesPage", // первый аргумент, название thunk
    async (searchParams, thunkAPI) => {
        const inited = getArticleListIsInited(thunkAPI.getState()); // как и сверху, тут я получю отдельную часть стейта;для использования getState внутри селектора не забудь передать стэйт в третий дженерик
        if (!inited) {
            // далее код для того, чтобы при копировании ссылки и открытии страницы в новой вкладке, все значения подставлялись в инпуты
            const orderFromURL = searchParams.get("order") as SortTypeOrder;
            const searchFromURL = searchParams.get("search");
            const sortFromURL = searchParams.get("sort") as ArticleSortField;
            const typeFromURL = searchParams.get("type") as ArticleType;

            if (orderFromURL) {
                addArticlesListActions.setOrder(orderFromURL);
            }

            if (searchFromURL) {
                addArticlesListActions.setSearch(searchFromURL);
            }

            if (sortFromURL) {
                addArticlesListActions.setSort(sortFromURL);
            }

            if (typeFromURL) {
                addArticlesListActions.setType(typeFromURL);
            }

            thunkAPI.dispatch(addArticlesListActions.initState());
            thunkAPI.dispatch(fetchArticlesList({}));
        }
    },
);
