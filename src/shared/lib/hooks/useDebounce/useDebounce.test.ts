import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react"; // для оборачивания хуков вне компонентов
import { useDebounce } from "./useDebounce";

vi.useFakeTimers(); // замена setTimeout на моковый

it("debounces the callback", () => {
    const callback = vi.fn(); // мокаю функцию, чтобы можно было проверять, вызывается или нет, сколько раз
    const { result } = renderHook(() => useDebounce(callback, 500)); // renderHook возвращает объект с несколькими полями, среди которых result - то, что вернет вызов (там сама функция в current и ошибка в error)

    result.current("first"); // вызываем коллбэк с аргументом, запускается таймер в 500 мс
    result.current("second"); // снова вызываем, это отменяет старый таймер и запускает новый

    // callback не вызван сразу, т.к. таймер еще не истек
    expect(callback).not.toBeCalled();

    // проматываю таймер
    vi.advanceTimersByTime(500);

    expect(callback).toBeCalledTimes(1); // функция вызвана только раз
    expect(callback).toBeCalledWith("second"); // и вызвана она с последним аргументом
});
