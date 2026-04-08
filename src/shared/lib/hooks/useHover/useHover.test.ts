import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react"; // для оборачивания хуков вне компонентов
import { useHover } from "./useHover";
// act - для оборачивания действий, вызывающих обновление состояния, для гарантии, что все ререндеры завершены до момента проверки результата
vi.useFakeTimers(); // замена setTimeout на моковый

describe("useHover test", () => {
    test("with false", () => {
        const { result } = renderHook(() => useHover());

        expect(result.current[0]).toBe(false);

        act(() => {
            result.current[1].onMouseEnter();
        });

        expect(result.current[0]).toBe(true);

        act(() => {
            result.current[1].onMouseLeave();
        });

        expect(result.current[0]).toBe(false);
    });
});
