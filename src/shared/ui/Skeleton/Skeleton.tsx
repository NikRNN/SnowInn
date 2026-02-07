import { classNames } from "shared/lib/classNames/classNames.js";
import { CSSProperties } from "react";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export function Skeleton({
    className, height, width, border,
}: SkeletonProps) {
    const styles : CSSProperties = {
        width, height, borderRadius: border,
    };

    console.log(cls);

    return (
        <div className={classNames(cls.Skeleton, [className])} style={styles} />
    );
}
