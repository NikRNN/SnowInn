import { classNames } from "shared/lib/classNames/classNames.js";
import { memo } from "react";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { ArticleTypeView } from "entities/Article/model/types/article";
import { Card } from "shared/ui/Card/Card";
import cls from "./ArticleListItem.module.scss";

interface SkeletonListItemProps {
  className?: string;
  view: ArticleTypeView;

}

export const SkeletonListItem = memo(({ className, view }: SkeletonListItemProps) => {
    if (view === ArticleTypeView.LIST) {
        return (
            <div className={classNames(cls.ArticleListItem, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} />
                        <Skeleton width={150} height={16} className={cls.usernameSkeleton} />
                        <Skeleton width={150} height={16} className={cls.dateSkeleton} />
                    </div>
                    <Skeleton width={150} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.imgSkeleton} />
                    <div className={cls.footerSkeleton}>
                        <Skeleton width={200} height={36} />

                    </div>
                </Card>
            </div>

        );
    }
    return (
        <div className={classNames(cls.ArticleListItem, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imgWrapperSkeleton}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapperSkeleton}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
});
