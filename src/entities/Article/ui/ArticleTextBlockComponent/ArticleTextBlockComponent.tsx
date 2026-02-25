import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleTextBlock } from "../../model/types/article";
import cls from "./ArticleTextBlockComponent.module.scss";
import { Text } from "../../../../shared/ui/Text/Text";

interface ArticleTextBloсkComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBloсkComponent = memo(({ className, block }: ArticleTextBloсkComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextBlokComponent, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}

            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}

        </div>
    );
});
