import { classNames } from "shared/lib/classNames/classNames.js";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher.js";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher.js";
import { Button } from "shared/ui/Button/Button.js";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            className={classNames(cls.sidebar, [className], {
                [cls.collapsed]: collapsed,
            })}
        >
            <Button onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
}
