import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react"; // для оборачивания хуков вне компонентов
import { useThrottle } from "./useThrottle";

vi.useFakeTimers(); // замена setTimeout на моковый

it("useThrottle test", () => {
    const callback = vi.fn(); // мокаю функцию, чтобы можно было проверять, вызывается или нет, сколько раз
    const { result } = renderHook(() => useThrottle(callback, 500)); // renderHook возвращает объект с несколькими полями, среди которых result - то, что вернет вызов (там сама функция в current и ошибка в error)

    act(() => {
        result.current("first");
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith("first");

    act(() => {
        result.current("second");
    });

    expect(callback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(500);

    expect(callback).toHaveBeenCalledWith("first");

    act(() => {
        result.current("third");
    });

    expect(callback).toHaveBeenCalledWith("third");
    expect(callback).toHaveBeenCalledTimes(2);
});
