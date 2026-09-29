import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import {memo, useEffect} from "react";
import cls from "./NotificationsList.module.scss";
import { useNotification } from "../../api/notificationApi";
import { VStack } from "shared/ui/Stack";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface NotificationListProps {
  className?: string;
}

export const NotificationsList = memo(({ className }: NotificationListProps) => {

    const {data, error, isLoading} = useNotification(null, {
        pollingInterval: 5000
    });

    if(isLoading) {
        return (
            <VStack className={classNames("", [className])}>
                <Skeleton className={cls.skeletonNotification} width="200px" height="30px"/>
                <Skeleton className={cls.skeletonNotification} width="200px" height="30px"/>
                <Skeleton className={cls.skeletonNotification} width="200px" height="30px"/>
            </VStack>
        )
    }

    return (
        <VStack className={classNames("", [className])}>
            {data?.map(item => {
                return (
                    <NotificationItem key={item.id} item={item}/>
                )
            })}
        </VStack>
    );
})