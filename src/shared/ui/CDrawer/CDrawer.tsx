import { Button } from "../Shadcn/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../Shadcn/drawer"
import { ReactNode } from "react";
import NotificationIcon from "../../../shared/assets/icons/notification-23-23.svg"
import { IconWrapper } from "../IconWrapper/IconWrapper";
import cls from "./CDrawer.module.scss"

const Notification = NotificationIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

interface DrawerProps {
    className?: string;
    children: ReactNode;
}

export function CDrawer(props: DrawerProps) {

    const {children} = props;

    return (
        <Drawer  direction={"bottom"}>
            <DrawerTrigger asChild >
                <Button >
                    <IconWrapper Svg={Notification}/>
                </Button>
            </DrawerTrigger>
            <DrawerContent className={cls.content}>
                <DrawerHeader>
                    <DrawerTitle>Уведомления...</DrawerTitle>
                </DrawerHeader>
                <div className={cls.body}>
                    {children}
                </div>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline">Свернуть...</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
               
    )
}
