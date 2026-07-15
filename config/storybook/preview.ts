import type { Preview } from "@storybook/react";
import { StoreDecoratorWithoutState } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider/index";
import { initialize, mswLoader } from "msw-storybook-addon";
import { SuspenseDecorator } from "shared/config/storybook/SuspenseDecorator/SuspenseDecorator";


initialize({
    onUnhandledRequest: "bypass",
});

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
          
            test: "todo",
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), StoreDecoratorWithoutState, SuspenseDecorator],
    loaders: [mswLoader],
};

export default preview;
