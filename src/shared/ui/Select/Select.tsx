import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import type { Mods } from "shared/lib/classNames/classNames.js";
import { useMemo, memo, ChangeEvent } from "react";
import cls from "./Select.module.scss";

export interface SelectOptions {
    value: string;
    content: string;
}

export interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value : string) => void;
  readonly?: boolean;
}

export const Select = memo(({
    className, label, options, value, onChange, readonly,
}: SelectProps) => {
    const { t } = useTranslation("countrySelect");

    const optionsList = useMemo(() => options?.map((option) => (<option key={option.value} className={cls.option} value={option.value}>{t(option.content)}</option>)), [options, t]);

    const mods : Mods = {

    };

    const onChangeHandlerSelect = (e :ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.selectWrapper, [className], mods)}>
            {label && (
                <span className={cls.selectLabel}>
                    {label}
                </span>
            )}
            <select disabled={readonly} className={cls.select} value={value} onChange={onChangeHandlerSelect}>
                {optionsList}
            </select>
        </div>
    );
});
