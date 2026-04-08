import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { Article } from "entities/Article";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import { addArticlesListReducer, getArticles } from "features/ArticlesList/model/slices/addArticlesListSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import {
    getArticleListError, getArticleListIsLoading, getArticleListView,
} from "features/ArticlesList/model/selectors/articlesListSelector";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";
import { fetchNextArticlesPage } from "features/ArticlesList/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { fetchInitArticlesPage } from "features/ArticlesList/model/services/initArticlesPage/initArticlesPage";
import { useSearchParams } from "react-router-dom";
import cls from "./ArticlePage.module.scss";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

interface ArticlePageProps {
  className?: string;

}

const reducers : ReducersList = {
    articlesList: addArticlesListReducer,
};

function ArticlesPage({ className }: ArticlePageProps) {
    const { t } = useTranslation();

    const [searchParams, setSearchParams] = useSearchParams();

    const articlesSelectors = useSelector(getArticles.selectAll); // получаем массив статей
    const isLoading = useSelector(getArticleListIsLoading);
    const error = useSelector(getArticleListError);
    const dispatch = useAppDispatch();
    const view = useSelector(getArticleListView);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchInitArticlesPage(searchParams));
    });

    return (
        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePage, [className, cls[view]])}>
                <ArticlesPageFilters />
                <ArticleList
                    error={error}
                    isLoading={isLoading}
                    view={view}
                    articles={articlesSelectors}
                    className={cls.listArticles}
                />
            </PageWrapper>
        </DynamicSomethingLoader>

    );
}

export default memo(ArticlesPage);
