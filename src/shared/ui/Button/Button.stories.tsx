import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { Button, ThemeButton } from "./Button.js";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "TEXT",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
    args: {
        children: "TEXT",
        theme: ThemeButton.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        children: "TEXT",
        theme: ThemeButton.OUTLINE,
    },
};
