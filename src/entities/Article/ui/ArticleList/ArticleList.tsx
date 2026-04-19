import { classNames } from "shared/lib/classNames/classNames.js";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { Article, ArticleTypeView } from "entities/Article/model/types/article";
import cls from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { SkeletonListItem } from "../ArticleListItem/skeletonListItem";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleTypeView;
  error?: string;
  linkTarget?: HTMLAttributeAnchorTarget
}

export const ArticleList = memo(({
    className, articles, isLoading, view = ArticleTypeView.TILE, error, linkTarget,
}: ArticleListProps) => {
    console.log(linkTarget);
    const renderArticle = (article : Article) => (

        <ArticleListItem linkTarget={linkTarget} article={article} view={view} className={cls.card} key={article.id} />
    );

    return (
        <div className={classNames(cls.ArticleList, [className, cls[view]])}>

            {articles.length ? articles.map((article) => renderArticle(article)) : null}
            {isLoading && new Array(view === ArticleTypeView.TILE ? 9 : 3)
                .fill(0)
                .map((item, index) => (
                    <SkeletonListItem
                        className={cls.card}
                        // eslint-disable-next-line
                        key={index}
                        view={view}
                    />
                ))}

        </div>
    );
});
