import { classNames } from "shared/lib/classNames/classNames.js";
import {
    HTMLAttributeAnchorTarget, memo, useCallback,
    useMemo,
} from "react";
import { Article, ArticleTypeView } from "../../model/types/article";
import { Virtuoso } from "react-virtuoso";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { SkeletonListItem } from "../ArticleListItem/skeletonListItem";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleTypeView;
  error?: string;
  linkTarget?: HTMLAttributeAnchorTarget;
  onScrollEnd?: ()=>void;
  virtualized?: boolean;
}

const getSkeletons = (view : ArticleTypeView) => (new Array(view === ArticleTypeView.TILE ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <SkeletonListItem
            className={cls.card}
            key={index}
            view={view}
        />
    )));

export const ArticleList = memo(({
    className, articles, isLoading, view = ArticleTypeView.TILE, linkTarget, onScrollEnd, virtualized,
}: ArticleListProps) => {
 
    const renderArticle = useCallback((index: number) => {
        const item = articles[index];
        
        return (
            <ArticleListItem
                linkTarget={linkTarget}
                article={item}
                view={view}
                className={cls.card}
            />
        );
    }, [articles, linkTarget, view]);

    const rows = useMemo(() => {
        
        const result: Article[][] = [];
        for (let i = 0; i < articles.length; i += 5) {
            result.push(articles.slice(i, i + 5));
        }
        return result;
    }, [articles]);

    const skeletonRows = useMemo(() => new Array(3).fill(0).map(() => [0, 1, 2, 3, 4]), []);

    if (!virtualized) {
        
        return (
            <div className={classNames(cls.ArticleList, [className, cls[view]])}>
                {isLoading && getSkeletons(view)}
                {articles.map((item) => (
                    <ArticleListItem
                        key={item.id}
                        linkTarget={linkTarget}
                        article={item}
                        view={view}
                        className={cls.card}
                    />
                ))}
            </div>
        );
    }

    if (view === ArticleTypeView.TILE) {
        const totalRows = isLoading ? rows.length + skeletonRows.length : rows.length;
        
        return (
            <div className={classNames(cls.ArticleList, [className, cls[view]])}>
                <Virtuoso
                    totalCount={totalRows}
                    itemContent={(index) => {
                        if (index >= rows.length) {
                            return (
                                <div className={cls.row}>
                                    {[0, 1, 2, 3, 4].map((_, i) => (
                                        <SkeletonListItem
                                            key={`skeleton-${index}-${i}`}
                                            className={cls.card}
                                            view={view}
                                        />
                                    ))}
                                </div>
                            );
                        }
                        // Статьи
                        return (
                            <div className={cls.row}>
                                {rows[index].map((article) => (
                                    <ArticleListItem
                                        key={article.id}
                                        linkTarget={linkTarget}
                                        article={article}
                                        view={view}
                                        className={cls.card}
                                    />
                                ))}
                            </div>
                        );
                    }}
                    endReached={() => {
                        onScrollEnd?.();
                    }}
                    useWindowScroll
                />
            </div>
        );
    }

    // LIST
    return (
        <div className={classNames(cls.ArticleList, [className, cls[view]])}>
            <Virtuoso
                totalCount={articles.length}
                itemContent={(index) => renderArticle(index)}
                useWindowScroll
                endReached={() => {
                    onScrollEnd?.();
                }}
            />
            <div className={cls.skeletonsWrapperList}>
                {isLoading && getSkeletons(view)}
            </div>
        </div>
    );
});
