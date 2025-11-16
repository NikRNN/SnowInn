import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher.js";
import { Button, ButtonTheme, SizeButton } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
// import MainPageIcon from "shared/assets/icons/main-page.svg"; - для prod
// import AboutPageIcon from "shared/assets/icons/about-us.svg"; - для prod
import { MainPageIcon } from "widgets/Sidebar/ui/Sidebar/storybook/MainPageIcon";
import { AboutUsIcon } from "widgets/Sidebar/ui/Sidebar/storybook/AboutUsIcon";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

// const MainIcon = MainPageIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>; - для prod
// const AboutIcon = AboutPageIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>; - для prod

// storybook тказывается работать с svg, поэтому для тестов вместо svg использую компоненты (для prod расскоментируй комметарии выше и ниже)

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
                        <MainPageIcon className={cls.icon} />
                        {/* {<MainIcon className={cls.icon}/>} - для prod */}
                        <span className={cls.link}>
                            {t("Главная")}
                        </span>
                    </AppLink>
                </div>

                <div>

                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
                        <AboutUsIcon className={cls.icon} />
                        {/* <AboutIcon className={cls.icon} /> - для prod */}
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
