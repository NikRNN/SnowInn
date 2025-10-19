import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { Sidebar } from "./Sidebar.js";

// перед тестированием добавь initialTheme в ThemeProvider!!!

const meta = {
    title: "widgets/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],

};

export const Dark: Story = {
    args: {},
};
