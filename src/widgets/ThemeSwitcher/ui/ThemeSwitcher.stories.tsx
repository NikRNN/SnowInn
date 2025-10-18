import type { Meta, StoryObj } from "@storybook/react-vite";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { ThemeSwitcher } from "./ThemeSwitcher.js";

const meta = {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: { },

};

export const Dark: Story = {
    args: { },
    decorators: [ThemeDecorator(Theme.DARK)],
};
