import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";
import { Text } from "shared/ui/Text/Text";
import type { Comment } from "../../model/types/comments";
import cls from "./CommentList.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text title={t("Комментарии отсутствуют")} />}
        </div>
    );
});
