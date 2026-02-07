import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import cls from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlokComponentProps {
  className?: string;
}

export function ArticleTextBlokComponent({ className }: ArticleTextBlokComponentProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextBlokComponent, [className])}>
            ARTICLE TEXT BLOCK COMPONENT...
        </div>
    );
}
