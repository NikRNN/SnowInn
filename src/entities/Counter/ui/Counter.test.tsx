import "shared/config/i18n/i18nForTest.js";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { componentRender } from "shared/lib/tests/componentRender/componentRender.js";
import { userEvent } from "@storybook/test";
import { Counter } from "./Counter.js";

describe("Counter", () => {
    test("render text", () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    });
    test("decr", async () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        await userEvent.click(screen.getByTestId("decr-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
    test("incr", async () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        await userEvent.click(screen.getByTestId("incr-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });
});
