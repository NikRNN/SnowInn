import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { Article } from "entities/Article";
import { ArticleTypeView } from "entities/Article/model/types/article";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import { articlesListActions, articlesListReducer, getArticles } from "features/ArticlesList/model/slices/addArticlesList";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchArticlesList } from "features/ArticlesList/model/services/fetchArticlesList";
import { useSelector } from "react-redux";
import { getArticleListError, getArticleListIsLoading, getArticleListView } from "features/ArticlesList/model/selectors/articlesListSelector";
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

    const onToggleView = (articleView : ArticleTypeView) => {
        dispatch(articlesListActions.setView(articleView));
    };

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesListActions.initState());
    });

    return (
        <DynamicSomethingLoader reducers={reducers}>
            <div className={classNames(cls.ArticlePage, [className, cls[view]])}>
                <ArticleViewSelector view={view} onToggleView={onToggleView} />
                <ArticleList
                    error={error}
                    isLoading={isLoading}
                    view={view}
                    articles={articlesSelectors}
                />
            </div>
        </DynamicSomethingLoader>

    );
}

export default memo(ArticlesPage);
