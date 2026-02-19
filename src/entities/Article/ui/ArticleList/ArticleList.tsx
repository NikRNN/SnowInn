import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";
import { Article, ArticleTypeView } from "entities/Article/model/types/article";
import cls from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleTypeView
}

export const ArticleList = memo(({
    className, articles, isLoading, view = ArticleTypeView.TILE,
}: ArticleListProps) => {
    const { t } = useTranslation();

    const renderArticle = (article : Article) => (
        <ArticleListItem article={article} view={view} className={cls.card} />
    );

    return (
        <div className={classNames(cls.ArticleList, [className])}>

            {articles.length ? articles.map((article) => renderArticle(article)) : null}

        </div>
    );
});
