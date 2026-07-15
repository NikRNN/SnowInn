import { ArticleDetailsCommentSchema } from "./ArticleDetailsCommentSchema";
import { ArticleDetailsRecommendedSchema } from "./ArticleDetailsRecommendedSchema";

// для группировки редьюсеров в сторе
export interface ArticleDetailsPageSchema {
comments: ArticleDetailsCommentSchema;
recommendations: ArticleDetailsRecommendedSchema
}
