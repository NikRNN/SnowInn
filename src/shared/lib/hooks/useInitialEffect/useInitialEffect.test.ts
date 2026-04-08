import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react"; // для оборачивания хуков вне компонентов
import { useInitialEffect } from "./useInitialEffect";
// act - для оборачивания действий, вызывающих обновление состояния, для гарантии, что все ререндеры завершены до момента проверки результата
vi.useFakeTimers(); // замена setTimeout на моковый

describe("useInitialEffect test", () => {
    test("calls callback", () => {
        const callback = vi.fn();
        import.meta.env.STORYBOOK = "false";

        renderHook(() => { useInitialEffect(callback); });

        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test("doesn't call callback", () => {
        const callback = vi.fn();
        import.meta.env.STORYBOOK = "true";

        renderHook(() => { useInitialEffect(callback); });

        expect(callback).not.toBeCalled();
    });
});
