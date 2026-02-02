import { classNames, Mods } from "shared/lib/classNames/classNames.js";
import {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string)=>void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [caretPos, setCaretPos] = useState(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPos(String(e.target.value).length);
    };

    const onBlur = () => { // когда инпут не в фокусе
        setIsFocused(false);
    };

    const onFocus = () => { // когда инпут в фокусе
        setIsFocused(true);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSelect = (e : any) => {
        setCaretPos(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const mods : Mods = {
        [cls.readonly]: readonly,
    };

    const isCaretVisible = isFocused && !readonly;

    return (
        <div className={classNames(cls.InputWrapper, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    {...otherProps}
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}

                />
                {isCaretVisible && (<span className={cls.caret} style={{ left: `${caretPos * 9}px` }} />)}

            </div>

        </div>
    );
});
