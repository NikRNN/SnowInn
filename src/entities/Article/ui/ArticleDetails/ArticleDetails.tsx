import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import { ArticleReducer } from "entities/Article/model/slice/ArticleDetailsSlice";
import { useEffect, memo, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {
    Text, TextPosition, TextSize, TextTheme,
} from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { IconWrapper } from "shared/ui/IconWrapper/IconWrapper";
import { ArticleBlock, ArticleBlockType } from "entities/Article/model/types/article";
import EyeIconArticle from "../../../../shared/assets/icons/eye-20-20.svg";
import CalendarIconArticle from "../../../../shared/assets/icons/calendar-20-20.svg";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "../../model/selectors/articleDetails";
import cls from "./ArticleDetails.module.scss";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBloсkComponent } from "../ArticleTextBlockComponent/ArticleTextBlokComponent";

const EyeIcon = EyeIconArticle as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const CalendarIcon = CalendarIconArticle as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

interface ArticleDetailsProps {
  className?: string;
  id: string
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();

    const reducers : ReducersList = {
        articleDetails: ArticleReducer,
    };

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const dataArticle = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block : ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBloсkComponent key={block.id} block={block} className={cls.block} />;
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        const isStorybook = import.meta.env.STORYBOOK === "true";
        if (!isStorybook) {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={150} />
                <Skeleton className={cls.skeleton} width="100%" height={150} />
            </>
        );
    } else if (error) {
        content = (
            <div>
                <Text
                    position={TextPosition.CENTER}
                    title={t("Произошла ошибка при загрузке статьи")}
                    text="Возможно, такой статьи у нас нет"
                    theme={TextTheme.ERROR}
                />
            </div>
        );
    } else {
        content = (
            <>

                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={dataArticle?.img} className={cls.avatar} />

                </div>

                <Text title={dataArticle?.title} text={dataArticle?.subtitle} size={TextSize.L} />
                <div className={cls.articleBlock}>
                    <IconWrapper className={cls.iconDetails} Svg={EyeIcon} />
                    <Text text={String(dataArticle?.views)} />
                </div>
                <div className={cls.articleBlock}>
                    <IconWrapper className={cls.iconDetails} Svg={CalendarIcon} />
                    <Text text={dataArticle?.createdAt} />
                </div>

                {dataArticle?.blocks.map((block) => renderBlock(block))}
            </>
        );
    }

    return (
        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, [className])}>
                {content}
            </div>
        </DynamicSomethingLoader>
    );
});
