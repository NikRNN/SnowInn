import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.module.scss";

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
