import { baseRTKApi } from "shared/api/baseRTKApi"
import { Article } from "entities/Article"

const recommendationsApi = baseRTKApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<Article[], number>({
            query: (limit) => ({
                url: "/articles",
                params: {
                    _limit: limit,
                }
            
            }),
        }),
    })
})

export const useArticlesRecommendationsList = recommendationsApi.useGetArticleRecommendationsQuery;