import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { Article, ArticleBlockType, ArticleTypeView } from "entities/Article/model/types/article";
import { Text, TextPosition } from "shared/ui/Text/Text";
import { IconWrapper } from "shared/ui/IconWrapper/IconWrapper";
import { Card } from "shared/ui/Card/Card";
import { useHover } from "shared/lib/hooks/useHover/useHover";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from "./ArticleListItem.module.scss";
import EyeIconArticle from "../../../../shared/assets/icons/eye-20-20.svg";
import { ArticleTextBloсkComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

const EyeIcon = EyeIconArticle as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view : ArticleTypeView;
  linkTarget?: HTMLAttributeAnchorTarget

}

export const ArticleListItem = memo(({
    className, article, view, linkTarget,
}: ArticleListItemProps) => {
    const { t } = useTranslation();
    console.log(linkTarget);
    const [isHover, funcHover] = useHover();

    // const navigate = useNavigate(); //убрал, т.к. статьи открывались в той же вкладке
    // const onOpenArticle = useCallback(() => {
    //     navigate(RoutePath.article_details + article.id);
    // }, [article.id, navigate]);

    if (view === ArticleTypeView.LIST) {
        const textBlocks = article.blocks.find((block) => block.type === ArticleBlockType.TEXT);

        return (

            <div className={classNames(cls.ArticleListItem, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text text={article.title} className={cls.title} />
                    <Text position={TextPosition.LEFT} text={article.type.join(", ")} className={cls.types} />
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {
                        textBlocks
                    && <ArticleTextBloсkComponent block={textBlocks} className={cls.textBlock} />
                    }
                    <div className={cls.footer}>
                        <AppLink target={linkTarget} to={RoutePath.article_details + article.id}>
                            <Button theme={ButtonTheme.OUTLINE} className={cls.btnList}>{t("Читать далее")}</Button>
                            <Text text={String(article.views)} className={cls.views} />

                        </AppLink>

                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div {...funcHover} className={classNames(cls.ArticleListItem, [className, cls[view]])}>

            <AppLink target={linkTarget} to={RoutePath.article_details + article.id}>

                <Card className={cls.card}>
                    <div className={cls.imgWrapper}>
                        <img src={article.img} alt={article.title} className={cls.img} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>

                    <div className={cls.infoWrapper}>
                        <Text position={TextPosition.LEFT} text={article.type.join(", ")} className={cls.types} />
                        <Text text={String(article.views)} className={cls.views} />
                        <IconWrapper className={cls.svg} Svg={EyeIcon} />
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </AppLink>

        </div>
    );
});
