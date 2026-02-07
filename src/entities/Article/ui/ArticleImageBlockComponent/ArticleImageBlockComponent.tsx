import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import cls from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
}

export function ArticleImageBlockComponent({ className }: ArticleImageBlockComponentProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, [className])}>
            ARTICLE IMAGE BLOCK COMPONENT...
        </div>
    );
}
