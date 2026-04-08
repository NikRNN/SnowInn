import { classNames } from "shared/lib/classNames/classNames.js";
import { memo, ReactNode, useCallback } from "react";
import cls from "./Tabs.module.scss";
import { Card, CardTheme } from "../Card/Card";

export interface TabItem {
    value: string;
content: ReactNode
}

export interface TabsProps {
  className?: string;
  tabsList: TabItem[];
  value: string;
  onTabClick: (tsb : TabItem)=>void

}

export const Tabs = memo(({
    className, tabsList, value, onTabClick,
}: TabsProps) => {
    const clickHandler = useCallback((tab : TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, [className])}>
            {tabsList.map((tab, index) => (
                // eslint-disable-next-line
    // @ts-ignore 
                // eslint-disable-next-line
                <Card onClick={clickHandler(tab)} theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED} className={cls.tab} key={index}>
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
