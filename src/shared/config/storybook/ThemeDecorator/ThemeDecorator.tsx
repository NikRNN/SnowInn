import { Decorator } from "@storybook/react-vite";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider/index.js";
import "../../../../app/styles/index.scss";

// тут ThemeProvider и initialTheme нужен для нормальной смены иконок в тестах: без них всегда light

export const ThemeDecorator = (theme: Theme): Decorator => function (Story) {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
