import { classNames } from "shared/lib/classNames/classNames.js";
import cls from "./IconWrapper.module.scss";

interface IconWrapperProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

export function IconWrapper({ className, Svg }: IconWrapperProps) {
    return (
        <Svg className={classNames(cls.IconWrapper, [className])} />
    );
}
