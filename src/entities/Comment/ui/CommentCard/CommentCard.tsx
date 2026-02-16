import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Skeleton } from "../../../../shared/ui/Skeleton/Skeleton";
import { Comment } from "../../model/types/comments";
import cls from "./CommentCard.module.scss";
import { Avatar } from "../../../../shared/ui/Avatar/Avatar";
import { Text, TextPosition } from "../../../../shared/ui/Text/Text";
import { AppLink } from "../../../../shared/ui/AppLink/AppLink";

interface CommentCardProps {
  className?: string;
  isLoading?: boolean;
  comment?: Comment;
}

export const CommentCard = memo(({ className, isLoading, comment }: CommentCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton className={cls.textComment} width="100%" height={16} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text className={cls.textComment} text={comment.text} position={TextPosition.LEFT} />
        </div>
    );
});
