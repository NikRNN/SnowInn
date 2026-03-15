import { useRef, RefObject, useEffect } from "react";

export interface useInfiniteScrollProps {
    callback?: ()=> void;
    triggerRef : RefObject<HTMLDivElement>; // элемент, прохождение которого является сигналом для вызова callback
    wrapperRef: RefObject<HTMLDivElement> // элемент, на котором висит скролл
}

export const useInfiniteScroll = ({ callback, triggerRef, wrapperRef } : useInfiniteScrollProps) => {
    useEffect(() => {
        let observer : IntersectionObserver | null = null;
        const wrapperElem = wrapperRef.current;
        const triggerElem = triggerRef.current;
        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: "0px",
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRef.current);
        }

        return (
            () => {
                if (observer && triggerElem) {
                    observer.unobserve(triggerElem);
                }
            }

        );
    }, [triggerRef, wrapperRef, callback]);
};
