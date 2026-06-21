import { classNames } from "shared/lib/classNames/classNames.js";
import { memo } from "react";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { ArticlesLoaderList } from "../ArticlesLoaderList/ArticlesLoaderList";
import { addArticlesListReducer } from "../../model/slices/addArticlesListSlice";
import cls from "./ArticlePage.module.scss";

export interface ArticlePageProps {
  className?: string;
}

const reducers : ReducersList = {
    articlesList: addArticlesListReducer,
};

function ArticlesPage({ className }: ArticlePageProps) {
    
    return (
        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper  className={classNames(cls.ArticlePage, [className])} isPageWrapperEnabled={false}>
                <ArticlesPageFilters />
                <ArticlesLoaderList />
            </PageWrapper>
        </DynamicSomethingLoader>
    );
}

export default memo(ArticlesPage);
