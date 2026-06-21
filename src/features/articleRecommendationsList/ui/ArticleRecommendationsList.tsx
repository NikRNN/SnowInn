import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text , TextSize } from "shared/ui/Text/Text";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { VStack } from "shared/ui/Stack";
import { useArticlesRecommendationsList } from "../api/articleRecommendationsApi";


interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data, error} = useArticlesRecommendationsList(5);

    if(isLoading || error) {
        return null
    }
    
    
    return (
        <VStack className={classNames("", [className], {})}>
            <Text size={TextSize.L} title={t("Может заинтересовать ДОБАВЬ СЛАЙДЕР")} />
            {<ArticleList linkTarget="_blank" virtualized={false} articles={data ?? []} />}
                
        </VStack>
    );
});



