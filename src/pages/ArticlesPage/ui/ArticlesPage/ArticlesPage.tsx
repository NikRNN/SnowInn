import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { Article } from "entities/Article";
import { ArticleTypeView } from "entities/Article/model/types/article";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import { articlesListActions, articlesListReducer, getArticles } from "features/ArticlesList/model/slices/addArticlesList";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchArticlesList } from "features/ArticlesList/model/services/fetchArticlesList/fetchArticlesList";
import { useSelector } from "react-redux";
import {
    getArticleListError, getArticleListIsInited, getArticleListIsLoading, getArticleListView,
} from "features/ArticlesList/model/selectors/articlesListSelector";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";
import { fetchNextArticlesPage } from "features/ArticlesList/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { fetchInitArticlesPage } from "features/ArticlesList/model/services/initArticlesPage/initArticlesPage";
import cls from "./ArticlePage.module.scss";
import { ArticleViewSelector } from "../ArticleViewSelector/ArticleViewSelector";

interface ArticlePageProps {
  className?: string;
  articles: Article[]
}

const reducers : ReducersList = {
    articlesList: articlesListReducer,
};

function ArticlesPage({ className, articles }: ArticlePageProps) {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const articlesSelectors = useSelector(getArticles.selectAll); // получаем массив статей
    const isLoading = useSelector(getArticleListIsLoading);
    const error = useSelector(getArticleListError);
    const view = useSelector(getArticleListView);
    const inited = useSelector(getArticleListIsInited);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    const onToggleView = (articleView : ArticleTypeView) => {
        dispatch(articlesListActions.setView(articleView));
    };

    useInitialEffect(() => {
        dispatch(fetchInitArticlesPage());
    });

    return (
        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePage, [className, cls[view]])}>
                <ArticleViewSelector view={view} onToggleView={onToggleView} />
                <ArticleList
                    error={error}
                    isLoading={isLoading}
                    view={view}
                    articles={articlesSelectors}
                />
            </PageWrapper>
        </DynamicSomethingLoader>

    );
}

export default memo(ArticlesPage);
