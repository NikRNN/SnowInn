import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { Button, ButtonTheme, SizeButton } from "./Button.js";

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
        theme: ButtonTheme.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlinedSizeL: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.OUTLINE,
        size: SizeButton.L,
    },
};

export const OutlinedSizeXL: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.OUTLINE,
        size: SizeButton.XL,
    },
};

export const Background: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BACKGROUND_INVERTED: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const CLEAR_INVERTED: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
        square: true,
    },
};

export const SizeM: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: SizeButton.M,
    },
};

export const SizeL: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: SizeButton.L,
    },
};

export const SizeXL: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: SizeButton.XL,
    },
};

export const Disabled: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: SizeButton.XL,
        disabled: true,
    },
};
