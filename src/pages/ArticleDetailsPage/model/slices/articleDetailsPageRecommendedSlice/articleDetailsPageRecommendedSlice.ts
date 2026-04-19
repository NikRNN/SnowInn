import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { ArticleDetailsRecommendedSchema } from "../../types/ArticleDetailsRecommendedSchema";
import { fetchArticlesRecommendations } from "../../services/fetchArticlesRecommendations/fetchArticlesRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>({

    // selectId: (article : Article) => article.id,

});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommended = createSlice({
    name: "articleDetailsComments",
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendedSchema>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined,

    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesRecommendations.fulfilled, (state, action : PayloadAction<Article[]>) => { // для action указан тип, который ожидаю на вход
                state.isLoading = false;
                state.error = undefined;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { reducer: articleDetailsPageRecommendedReducer } = articleDetailsPageRecommended;
