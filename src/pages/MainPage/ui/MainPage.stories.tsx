import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { StoreDecoratorWithoutState } from "shared/config/storybook/StoreDecorator/StoreDecorator.js";
import MainPage from "./MainPage.js";

const meta = {
    title: "pages/MainPage",
    component: MainPage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: { },
    decorators: [StoreDecoratorWithoutState],

};

export const Dark: Story = {
    args: { },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecoratorWithoutState],
};
