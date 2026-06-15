import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Country } from "../model/types/country";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Austria, content: Country.Austria },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.China, content: Country.China },
    { value: Country.Italy, content: Country.Italy },

];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation("countrySelect");

    const onChangeHandler = useCallback((selectedValue : string) => {
        onChange?.(selectedValue as Country);
    }, [onChange]);

    return (

        <ListBox direction="bottom-right"  readonly={readonly} className={className} defaultValue={t("Нажмите, чтобы выбрать")} items={options} value={value} onChange={onChangeHandler} label={t("Укажите страну>")}/>

    );
});
