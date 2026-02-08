import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import cls from "./ArticleDetailPage.module.scss";

interface ArticlesDetailsPageProps {
  className?: string;
}

export function ArticleDetailsPage({ className }: ArticlesDetailsPageProps) {
    const { t } = useTranslation("article_details");

    const { id } = useParams(); // получаю id из строки запроса

    if (!id) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, [className])}>
                {t("Статья не найдена")}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticlesDetailsPage, [className])}><ArticleDetails id={id} /></div>
    );
}

export default memo(ArticleDetailsPage);
