import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Article, ArticleTypeView } from "entities/Article/model/types/article";
import { Text, TextPosition } from "shared/ui/Text/Text";
import { IconWrapper } from "shared/ui/IconWrapper/IconWrapper";
import { Card } from "shared/ui/Card/Card";
import { useHover } from "shared/lib/hooks/useHover/useHover";
import { Avatar } from "shared/ui/Avatar/Avatar";
import cls from "./ArticleListItem.module.scss";
import EyeIconArticle from "../../../../shared/assets/icons/eye-20-20.svg";

const EyeIcon = EyeIconArticle as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view : ArticleTypeView
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation();

    const [isHover, funcHover] = useHover();
    console.log(isHover);

    if (view === ArticleTypeView.LIST) {
        return (
            <div className={classNames(cls.ArticleListItem, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>

                        <Avatar size={30} src={article.user.avatar} />
                    </div>

                </Card>

            </div>
        );
    }

    return (
        <div {...funcHover} className={classNames(cls.ArticleListItem, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imgWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text text={article.createdAt} className={cls.data} />
                </div>

                <div className={cls.infoWrapper}>
                    <Text position={TextPosition.LEFT} text={article.type.join(", ")} className={cls.types} />
                    <Text text={String(article.views)} className={cls.views} />
                    <IconWrapper className={cls.svg} Svg={EyeIcon} />
                </div>
                <Text text={article.title} className={cls.title} />

            </Card>

        </div>
    );
});
