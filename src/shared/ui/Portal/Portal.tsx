import { ReactNode } from "react";
import { createPortal } from "react-dom";
import "app/styles/index.scss";

interface PortalProps {
  children: ReactNode; // что телепортирую
  element?: HTMLElement; // куда телепортирую

}

export function Portal(props: PortalProps) {
    const {
        children, element = document.body,
    } = props;

    return (
        createPortal(children, element)
    );
}
