import { classNames } from "shared/lib/classNames/classNames.js";
import { Button } from "shared/ui/Button/Button.js";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface BugButtonProps {
  className?: string;
}

export function BugButton({ className }: BugButtonProps) {
    const [err, setErr] = useState(false);
    const { t } = useTranslation();

    const throwErr = () => setErr(true);

    useEffect(() => {
        if (err === true) {
            throw new Error();
        }
    }, [err]);

    return (
        <Button onClick={throwErr} className={classNames("", [className])}>{t("throw error")}</Button>
    );
}
