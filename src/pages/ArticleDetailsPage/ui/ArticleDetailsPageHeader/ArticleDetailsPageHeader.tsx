import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selectors/editArticle/editArticle";
import { getArticleDetailsData } from "entities/Article";
import { RoutePath } from "../../../../shared/config/routeConfig/routeConfig";
import cls from "./ArticleDetailsPageHeader.module.scss";
import { Button } from "../../../../shared/ui/Button/Button";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const canEdit = useSelector(getCanEditArticle); // вся логика по сравнению id статьи и пользователя находится в селекторе
    const article = useSelector(getArticleDetailsData);

    const navigate = useNavigate();
    const onBackToArticlesList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [navigate, article?.id]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, [className])}>
            <Button onClick={onBackToArticlesList}>{t("Назад")}</Button>
            {canEdit && <Button onClick={onEditArticle} className={cls.editBtn}>{t("Редактировать")}</Button>}
        </div>
    );
});
