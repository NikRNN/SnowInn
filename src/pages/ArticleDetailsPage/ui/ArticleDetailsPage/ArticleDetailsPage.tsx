import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect.js";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch.js";
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle.js";
import { Button } from "shared/ui/Button/Button.js";
import { RoutePath } from "shared/config/routeConfig/routeConfig.js";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper.js";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { getArticleCommentIsLoading } from "../../model/selectors/comments/getArticleCommentIsLoding/getArticleCommentIsLoading";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { ArticleDetails } from "../../../../entities/Article";
import { CommentList } from "../../../../entities/Comment";
import { Text, TextSize } from "../../../../shared/ui/Text/Text";
import { DynamicSomethingLoader, ReducersList } from "../../../../shared/lib/component/DynamicSomethingLoader";
import cls from "./ArticleDetailsPage.module.scss";
import { getArticleComments } from "../../model/slices/articleDetailsPageCommentSlice/articleDetailsPageCommentsSlice";
import { getArticleCommentError } from "../../model/selectors/comments/getArticleCommentError/getArticleCommentError";
import { fetchCommentByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentByArticleId";
import { AddNewComment } from "../../../../features/AddNewComment/index";
import { getArticleRecommendations } from "../../model/slices/articleDetailsPageRecommendedSlice/articleDetailsPageRecommendedSlice";
import { getArticleRecommendationsError, getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations/recommendations";
import { fetchArticlesRecommendations } from "../../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers:ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

export function ArticleDetailsPage({ className }: ArticlesDetailsPageProps) {
    const { t } = useTranslation("article_details");
    const dispatch = useAppDispatch();

    const { id } = useParams(); // получаю id из строки запроса

    const comments = useSelector(getArticleComments.selectAll); // получил список комментариев
    const commentsIsLoading = useSelector(getArticleCommentIsLoading);
    const commentsError = useSelector(getArticleCommentError);
    const recommendations = useSelector(getArticleRecommendations.selectAll); // получил список рекоммендаций
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsError);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
        dispatch(fetchArticlesRecommendations());
    });

    const onSendComment = useCallback((value : string) => {
        dispatch(addCommentForArticle(value));
    }, [dispatch]);

    const isStorybook = import.meta.env.STORYBOOK === "true";

    if (!id && !isStorybook) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, [className])}>
                {t("Статья не найдена")}
            </div>
        );
    }

    return (
        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount>
            <PageWrapper className={classNames(cls.ArticleDetailsPage, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id!} />
                <Text size={TextSize.L} className={cls.commentsTitle} title={t("Может заинтересовать")} />
                <ArticleList linkTarget="_blank" className={cls.recommendations} articles={recommendations} isLoading={recommendationsIsLoading} />
                <Text size={TextSize.L} className={cls.commentsTitle} title={t("Комментарии")} />
                <AddNewComment onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </PageWrapper>
        </DynamicSomethingLoader>

    );
}

export default memo(ArticleDetailsPage);
