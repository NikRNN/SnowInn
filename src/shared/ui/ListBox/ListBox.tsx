import { ReactNode} from "react";
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxItem,
    ComboboxList,
    ComboboxTrigger } from "../Shadcn/combobox"
import { classNames , Mods } from "../../lib/classNames/classNames";
import cls from "./ListBox.module.scss"
import { ChevronDownIcon } from "lucide-react";
import { DropdownDirection } from "../../types/ui";


interface ListBoxItem {
    value: string;
    content: ReactNode;
}
interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value : string) => void;
    label?: string;
    readonly?: boolean;
    direction?: DropdownDirection
}

export function ListBox(props : ListBoxProps) {

    const {items, className, value, defaultValue, onChange, label, readonly, direction="bottom-left" } = props;

    const displayItems = items?.map(i => i.content) ?? [];

    const selectedContent = items?.find(i => i.value === value)?.content;

    const mods : Mods = {
        [cls.disabled]: readonly,
    };

    const optionsClasses = [cls[direction]];

    return (
        <div className={classNames(cls.ListBox, [className], {})} >
            {label && (
                <span className={cls.selectLabel}>
                    {label}
                </span>
            )}
            <Combobox value={selectedContent} items={displayItems} onValueChange={(selectedContent)=>{
                const selected = items?.find(i => i.content === selectedContent);
                if(selected) {
                    onChange?.(selected?.value)
                }
            }}>

                <ComboboxTrigger className={readonly ? cls.disabledTrigger : cls.activeTrigger} disabled={readonly}>
                    <div className={classNames(cls.trigger, [], mods)} >
                        {selectedContent || (defaultValue ?? "Выберите значение")}
                        <ChevronDownIcon className={cls.chevron} />
                    </div>
                </ComboboxTrigger>
                <ComboboxContent className={classNames(cls.dropdown)} >
                    <ComboboxEmpty>No items found...</ComboboxEmpty>
                    <ComboboxList className={classNames(cls.list, optionsClasses, {})}>
                        {
                            displayItems.map((displayItem, index) => {
                                const originalItem = items?.[index];
                                return (
                                    <ComboboxItem
                                        className={classNames(cls.item, [], {})}
                                        key={originalItem?.value}
                                        value={displayItem}
                                    >
                                        {displayItem}
                                    </ComboboxItem>
                                    
                                );
                            })}
                    </ComboboxList> 
                </ComboboxContent>
            </Combobox>
        </div>
    )
}

