import type { Preview } from "@storybook/react-vite";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator.js";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "../../src/app/providers/ThemeProvider/index.js";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator.js";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo",
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],

};

export default preview;
