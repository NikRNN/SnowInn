import { classNames } from "shared/lib/classNames/classNames.js";
import "./Loader.scss";

interface LoaderProps {
  className?: string;
}

export function Loader({ className }: LoaderProps) {
    return (
        <div className={classNames("lds-roller", [className])}>
            <div>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
}
