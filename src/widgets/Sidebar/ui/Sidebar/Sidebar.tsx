import { classNames } from "shared/lib/classNames/classNames.js";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher.js";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher.js";
import { Button, ButtonTheme, SizeButton } from "shared/ui/Button/Button.js";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink.js";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig.js";
import MainPageIcon from "shared/assets/icons/main-page.svg";
import AboutPageIcon from "shared/assets/icons/about-us.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

const MainIcon = MainPageIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const AboutIcon = AboutPageIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);
    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, [className], {
                [cls.collapsed]: collapsed,
            })}
        >
            <Button
                size={SizeButton.L}
                square
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={classNames(cls.collapsedBtn)}
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {collapsed ? ">" : "<"}
            </Button>

            <div className={cls.items}>

                <div>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                        className={cls.item}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>
                            {" "}
                            {t("Главная")}
                        </span>

                    </AppLink>
                </div>

                <div>

                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t("О сайте")}
                        </span>

                    </AppLink>
                </div>

            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
}
