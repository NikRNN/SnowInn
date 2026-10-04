import { classNames } from "@/shared/lib/classNames/classNames.js";
import {memo} from "react";
import type { Notification } from "../../model/types/notifications";
import cls from "./NotificationItem.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Text } from "@/shared/ui/Text/Text";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo(({ item }: NotificationItemProps) => {
    
    if(item.href) {
        return (
            <AppLink to={item.href} className={classNames(cls.itemHref, [], {})} target="_blank" rel="noreferrer">
                {item.description}
            </AppLink>
        )
    }

    return (
        <div className={classNames(cls.item, [], {})}>
            <Text title={item.title} text={item.description}/>
        </div>
    );
})