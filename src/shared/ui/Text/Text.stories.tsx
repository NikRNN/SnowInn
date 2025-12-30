import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { TextTheme, Text } from "./Text.js";

const meta: Meta<typeof Text> = {
    title: "shared/Text",
    component: Text,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "lorem ipsum",
        text: "description description description",
    },
};

export const Error: Story = {
    args: {
        title: "lorem ipsum",
        text: "description description description",
        theme: TextTheme.ERROR,
    },

};

export const OnlyTitle: Story = {
    args: {
        title: "lorem ipsum",
    },
};

export const OnlyText: Story = {
    args: {
        text: "description description description",
    },
};

export const PrimaryDark: Story = {
    args: {
        title: "lorem ipsum",
        text: "description description description",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: "lorem ipsum",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: "description description description",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
