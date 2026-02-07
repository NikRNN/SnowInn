import type { Meta, StoryObj } from "@storybook/react";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator/StyleDecorator.js";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { Skeleton } from "./Skeleton.js";

const meta = {
    title: "shared/Skeleton",
    component: Skeleton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: "100%",
        height: "200px",
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.DARK)],
};

export const Circle: Story = {
    args: {
        border: "50%",
        width: "100",
        height: "100",
    },
    decorators: [StyleDecorator],
};
