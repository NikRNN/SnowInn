import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider/index";
import { Sidebar } from "./Sidebar";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

// перед тестированием добавь initialTheme в ThemeProvider!!!

const meta = {
    title: "widgets/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    parameters: {
        backgrounds: {
            default: "dark",
            values: [
                { name: "dark", value: "#b0b0b0" },
            ],
        },
    },
    decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator("/", "/*")],

};

export const Dark: Story = {
    args: {},
    parameters: {
        backgrounds: {
            default: "dark",
            values: [
                { name: "dark", value: "#333" },
            ],
        },
    },
    decorators: [ThemeDecorator(Theme.DARK), RouterDecorator("/", "/*")],
};
