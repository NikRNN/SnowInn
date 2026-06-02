import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { Navbar } from "./Navbar.js";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator.js";
const meta = {
    title: "widgets/Navbar",
    component: Navbar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},

    args: { },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    decorators: [RouterDecorator("/", "/*")]
};
