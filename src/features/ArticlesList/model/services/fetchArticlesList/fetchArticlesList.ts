import { createAsyncThunk } from "@reduxjs/toolkit";
import type { StateSchema, ThunkApi } from "app/providers/StoreProvider";
import type { Article } from "entities/Article";
import {
    getArticlesListSearch, getArticlesListSort, getArticlesListOrder, getArticlesListType,
} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { addQueryParams } from "shared/lib/url/addQueryParams";
import { ArticleType } from "entities/Article/model/types/article";
import { getArticleListLimit, getArticleListPageNum } from "../../selectors/articlesListSelector";

interface fetchArticlesListProps {
    page?: number,
    replace?: boolean // поле из-за того, что в слайсе использую метод addMany, который всегда добавляет новую порцию в конец; из-за этого сортировка бессмысленна
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, {rejectValue: string, extra : ThunkApi, state: StateSchema}>( // типы: массив Comment - то, что вернется в случае успеха, второе - входные данные thunk и тип ошибки
    "articlesList/fetchArticlesList", // первый аргумент, название thunk
    async (props, thunkAPI) => {
        const limit = getArticleListLimit(thunkAPI.getState()); // для использования getState внутри селектора не забудь передать стэйт в третий дженерик
        const order = getArticlesListOrder(thunkAPI.getState());
        const sort = getArticlesListSort(thunkAPI.getState());
        const search = getArticlesListSearch(thunkAPI.getState());
        const pageNum = getArticleListPageNum(thunkAPI.getState());
        const type = getArticlesListType(thunkAPI.getState());
        try {
            addQueryParams({ sort, order, search }); // чтобы query парамтеры подставлялись в строку браузера

            const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
                params: {
                    _expand: "user",
                    _limit: limit, // см документацию к json server по всему этому аргументу
                    _page: pageNum, // -/-
                    _order: order,
                    _sort: sort,
                    type: type === ArticleType.ALL ? undefined : type,
                    q: search,

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
