import { classNames } from "shared/lib/classNames/classNames";
import { useState, memo } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher.js";
import { Button, ButtonTheme, SizeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

import cls from "./Sidebar.module.scss";
import { SideBarItemsList } from "./model/items";
import { SidebarItem } from "../SidebarItems/SibebarItem";

interface SidebarProps {
  className?: string;
}

// storybook тказывается работать с svg, поэтому для тестов вместо svg использую компоненты (для prod расскоментируй комметарии выше и ниже)

export const Sidebar = memo(
    ({ className }: SidebarProps) => {
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

                    {SideBarItemsList.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />)}

                </div>

                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher short={collapsed} className={cls.lang} />
                </div>
            </div>
        );
    },

);
