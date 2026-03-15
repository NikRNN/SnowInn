import { classNames } from "shared/lib/classNames/classNames.js";

import {
    memo, ReactNode, useRef,
    RefObject,
} from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import cls from "./PageWrapper.module.scss";

interface PageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: ()=>void;
}

export const PageWrapper = memo(({ className, children, onScrollEnd }: PageProps) => {
    const triggerRef = useRef(null) as unknown as RefObject<HTMLDivElement>;
    const wrapperRef = useRef(null) as unknown as RefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef, wrapperRef, callback: onScrollEnd,
    });
    return (
        <section ref={wrapperRef} className={classNames(cls.PageWrapper, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>

    );
});
