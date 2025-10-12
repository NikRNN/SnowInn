import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button, ThemeButton } from "./Button.js";

describe("Button", () => {
    test("render text", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
    test("with themeButton", () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        const elem = screen.getByText("TEST");
        expect(elem.className).toMatch(/clear/);
        screen.debug();
    });
});
