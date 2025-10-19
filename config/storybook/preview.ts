import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider/index";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
    parameters: {
        viewport: {
            viewports: {
                laptop: {
                    name: "Laptop",
                    styles: {
                        width: "1366px",
                        height: "768px",
                    },
                },
                mobile: {
                    name: "Mobile",
                    styles: {
                        width: "375px",
                        height: "667px",
                    },
                },
            },
            defaultViewport: "laptop",
        },
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
