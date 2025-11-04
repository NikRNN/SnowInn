import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.navbar, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
}
