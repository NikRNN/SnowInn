import type { Meta, StoryObj } from "@storybook/react-vite";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { AppLink, AppLinkTheme } from "./AppLink.js";

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { to: "/" },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { theme: AppLinkTheme.PRIMARY, children: "text" },

};

export const Secondary: Story = {
    args: { theme: AppLinkTheme.SECONDARY, children: "text" },
};

export const Red: Story = {
    args: { theme: AppLinkTheme.RED, children: "text" },
};

export const PrimaryDark: Story = {
    args: { theme: AppLinkTheme.PRIMARY, children: "text" },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
    args: { theme: AppLinkTheme.SECONDARY, children: "text" }, decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
    args: { theme: AppLinkTheme.RED, children: "text" }, decorators: [ThemeDecorator(Theme.DARK)],
};
