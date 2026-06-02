import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { NotFoundPage } from "./NotFoundPage.js";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator.js";

const meta = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: { },
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: { },
    decorators: [RouterDecorator("/", "/*")]

};

export const Dark: Story = {
    args: { },
    decorators: [ThemeDecorator(Theme.DARK), RouterDecorator("/", "/*")],
};
