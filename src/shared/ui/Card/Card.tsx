import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import {
    memo, HTMLAttributes,
    ReactNode,
} from "react";
import { Article, ArticleTypeView } from "entities/Article";
import cls from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
 children?: ReactNode
}

export const Card = memo(({
    className, children, ...otherProps
}: CardProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Card, [className])} {...otherProps}>
            {children}
        </div>
    );
});
