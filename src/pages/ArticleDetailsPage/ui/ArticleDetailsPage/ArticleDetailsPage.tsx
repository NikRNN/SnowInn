import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper.js";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { ArticleDetails } from "../../../../entities/Article";
import { DynamicSomethingLoader, ReducersList } from "../../../../shared/lib/component/DynamicSomethingLoader";
import cls from "./ArticleDetailsPage.module.scss";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleRecommendationsList } from "features/articleRecommendationsList/index.js";
import { ArticleDetailsComment } from "../ArticleDetailsComment/ArticleDetailsComment.js";

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers:ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

export function ArticleDetailsPage({ className }: ArticlesDetailsPageProps) {
    const { t } = useTranslation("article_details");
    const { id } = useParams(); // получаю id из строки запроса
    
    const isStorybook = import.meta.env.STORYBOOK === "true";
    if (!id && !isStorybook) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, [className])}>
                {t("Статья не найдена")}
            </div>
        );
    }

    return (
        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount>
            <PageWrapper className={classNames(cls.ArticleDetailsPage, [className])}>
                <div>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id!} />
                    <ArticleRecommendationsList/>
                    <ArticleDetailsComment id={id}/>
                </div>
            </PageWrapper>
        </DynamicSomethingLoader>

    );
}

export default memo(ArticleDetailsPage);
