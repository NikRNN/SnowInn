import { classNames } from "@/shared/lib/classNames/classNames.js";
import {memo, ReactNode } from "react";
import { Button } from "../Shadcn/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../Shadcn/popover"
import type { DropdownDirection } from "../../types/ui";
import cls from "./CustomPopover.module.scss";

interface PopoverProps {
  className?: string;
  trigger?: ReactNode; 
  direction: DropdownDirection;
  children: ReactNode;
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

export const CustomPopover = memo((props: PopoverProps) => {
    
    const {className, direction, trigger, children} = props;

    const optionsClasses = mapDirection[direction]

    return (
        <div className={classNames(cls.Popover, [className])}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button className={cls.button} variant="outline">{trigger}</Button>
                </PopoverTrigger>
                <PopoverContent className={cls.content} side={optionsClasses.side} align={optionsClasses.align}>
                    {children}
                </PopoverContent>
            </Popover>
        </div>
    );
})

