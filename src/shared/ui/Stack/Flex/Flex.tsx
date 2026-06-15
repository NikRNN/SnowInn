import { classNames } from "shared/lib/classNames/classNames.js";
import {memo, ReactNode, DetailedHTMLProps, HTMLAttributes} from "react";
import cls from "./Flex.module.scss";

export type FlexJustify = "start" | "center" | "end" | "between";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "column" | "row";
export type FlexGap = "4" | "8" | "10" | "20" | "25";

const justifyClasses : Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
}

const alignClasses : Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
}

const directionClasses : Record<FlexDirection, string> = {
    column: cls.directionColumn,
    row: cls.directionRow,
}

const gapClasses : Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    10: cls.gap10,
    20: cls.gap20,
    25: cls.gap25,
}

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justifyContent?: FlexJustify;
  alignContent?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
}

export const Flex = memo(({ className, 
    children, 
    justifyContent = "center", 
    alignContent = "center", 
    direction = "row",
    gap }: FlexProps) => {
    

    return (
        <div className={classNames(cls.Flex, [className, justifyClasses[justifyContent], alignClasses[alignContent], directionClasses[direction], gap && gapClasses[gap]])}>
            {children}
        </div>
    );
})