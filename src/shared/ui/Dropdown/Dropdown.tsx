import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { ReactNode } from "react";
import cls from "./Dropdown.module.scss";
import { DropdownDirection } from "../../types/ui";
import { AppLink, AppLinkTheme } from "../AppLink/AppLink";
import { useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/index";

import { Button } from "../Shadcn/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../Shadcn/dropdown-menu"

export interface DropdownItem {
    id?:string;
    disabled?: boolean;
    content?: ReactNode;
    onClick?: ()=>void;
    href?:  string;
}
export interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger?: ReactNode; 
  direction: DropdownDirection
}

const mapDirection = {
    "top-left": {
        side: "top",
        align: "end",
    },
    "top-right": {
        side: "top",
        align: "start",
    },
    "bottom-left": {
        side: "bottom",
        align: "end",
    },
    "bottom-right": {
        side: "bottom",
        align: "start",
    },
} as const;


export function Dropdown({ className, trigger,  items, direction }: DropdownProps) {
    const { t } = useTranslation();

    const optionsClasses = mapDirection[direction]

    const location = useLocation();
    const isMainPage = location.pathname === RoutePath.main;
    
    const mods : Record <string, boolean | undefined> = {
        [cls.main]: isMainPage,
    };

    return (
        <div className={classNames(cls.Dropdown, [className], {})}>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button className={cls.button} variant="outline">{trigger}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent avoidCollisions={false} className={classNames(cls.menu, [], mods)}  side={optionsClasses.side} align={optionsClasses.align}>
                    <DropdownMenuGroup  className={classNames(cls.dropdown)}>
                        {items.map(item => {

                            if(item.href) {
                                
                                return (
                                    <DropdownMenuItem
                                        asChild 
                                        key={item.id}
                                        className={classNames(cls.item)}
                                        onClick={item.onClick} 
                                        disabled={item.disabled}
                                    >
                                        <AppLink 
                                            theme={AppLinkTheme.RESET}
                                            to={item.href}>{item.content}</AppLink>
                                    </DropdownMenuItem>
                                )
                            }
                            
                            return (
                                <DropdownMenuItem 
                                    key={item.id} 
                                    className={classNames(cls.item)} 
                                    onClick={item.onClick} 
                                    disabled={item.disabled}>
                                    {item.content}
                                </DropdownMenuItem>
                            )
                        })}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
       
        
    );
}