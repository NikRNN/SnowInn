import { renderHook } from "@testing-library/react";
import { Mock } from "vitest";
import { useInfiniteScroll } from "./useInfiniteScroll";

describe("test", () => {
    let observe : Mock;
    let unobserve : Mock;
    let callbackMock : Mock;

    beforeEach(() => {
        observe = vi.fn();
        unobserve = vi.fn();
        callbackMock = vi.fn();
        vi.clearAllMocks();

        global.IntersectionObserver = vi.fn((func) => {
            callbackMock = func;

            return {
                observe, unobserve, disconnect: vi.fn(),
            };
            // eslint-disable-next-line
    // @ts-ignore 
            // eslint-disable-next-line
        }) as any;
    });

    test("calls when intersecting", () => {
        const callback = vi.fn();

        const triggerRef = { current: document.createElement("div") };
        const wrapperRef = { current: document.createElement("div") };

        renderHook(() => useInfiniteScroll({ callback, triggerRef, wrapperRef }));

        callbackMock([{ isIntersecting: true }]);

        expect(callback).toHaveBeenCalled();
    });

    test("calls unobserve", () => {
        const callback = vi.fn();

        const triggerRef = { current: document.createElement("div") };
        const wrapperRef = { current: document.createElement("div") };

        const { unmount } = renderHook(() => useInfiniteScroll({ callback, triggerRef, wrapperRef }));

        unmount();

        expect(unobserve).toHaveBeenCalled();
    });
});
