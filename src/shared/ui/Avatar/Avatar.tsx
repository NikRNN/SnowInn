import { classNames } from "shared/lib/classNames/classNames.js";
import { CSSProperties, useMemo } from "react";
import cls from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src: string | undefined; // вообще пропс д.б. обязательным, но тогда в артикл дитейлс будет ругаться Avatar на dataArticle.img
  size?: number;
  alt?: string;
}

export function Avatar({
    className, src, size, alt,
}: AvatarProps) {
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img style={styles} src={src} alt={alt} className={classNames(cls.Avatar, [className], {})} />
    );
}
