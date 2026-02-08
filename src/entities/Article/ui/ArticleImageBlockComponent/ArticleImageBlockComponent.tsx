import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleImageBlock } from "../../model/types/article";
import cls from "./ArticleImageBlockComponent.module.scss";
import { Text, TextPosition } from "../../../../shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, [className])}>
            <img src={block.src} alt="" className={cls.img} />
            {block.title && (
                <Text text={block.title} className={cls.title} position={TextPosition.CENTER} />
            )}
        </div>
    );
});
