import {memo} from "react";
import { CustomPopover } from "shared/ui/CustomPopover/CustomPopover";
import { IconWrapper } from "shared/ui/IconWrapper/IconWrapper";
import { Button , ButtonTheme } from "shared/ui/Button/Button";
import { NotificationsList } from "entities/Notification";
import NotificationIcon from "../../../shared/assets/icons/notification-23-23.svg"
import cls from "./NotificationBell.module.scss";

const Notification = NotificationIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

interface NotificationBellProps {
  className?: string;
}

export const NotificationBell = memo((props: NotificationBellProps) => {
    
    return (
        <CustomPopover trigger={(<Button theme={ButtonTheme.CLEAR}>
            <IconWrapper className={cls.popoverTrigger} Svg={Notification}/>
        </Button>)} direction="bottom-left">
            <NotificationsList/>
        </CustomPopover>
    );
})