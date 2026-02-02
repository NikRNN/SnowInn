import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import AboutPage from "./AboutPage.js";

const meta = {
    title: "pages/AboutPage",
    component: AboutPage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: { },

};

export const Dark: Story = {
    args: { },
    decorators: [ThemeDecorator(Theme.DARK)],
};
