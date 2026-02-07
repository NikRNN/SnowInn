import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import cls from "./ArticlePage.module.scss";

interface ArticlePageProps {
  className?: string;
}

function ArticlePage({ className }: ArticlePageProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlePage, [className])}>
            ARTICLE PAGE...
        </div>
    );
}

export default memo(ArticlePage);
