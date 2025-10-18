import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink.js";
import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    {t("Главная")}
                </AppLink>

                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t("О сайте")}
                </AppLink>
            </div>
        </div>
    );
}
