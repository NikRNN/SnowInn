import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { PageError } from "./PageError.js";

const meta = {
    title: "widgets/PageError",
    component: PageError,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],

};

export const Light: Story = {
    args: {},
};
