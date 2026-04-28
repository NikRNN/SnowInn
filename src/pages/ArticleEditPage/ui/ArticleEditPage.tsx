import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";
import { useParams } from "react-router-dom";
import cls from "./ArticleEditPage.module.scss";

export interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id:string}>();
    const isEdit = Boolean(id); // если id есть, то это редактирование, если нет, то это создание новой статьи

    return (
        <PageWrapper className={classNames(cls.ArticleEditPage, [className])}>
            {isEdit ? "Редактирование статьи" : "Создание статьи"}
        </PageWrapper>
    );
});

export default ArticleEditPage;
