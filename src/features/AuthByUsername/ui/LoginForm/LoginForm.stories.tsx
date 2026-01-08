import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecoratorWithState } from "shared/config/storybook/StoreDecorator/StoreDecorator.js";
import LoginForm from "./LoginForm.js";

const meta: Meta<typeof LoginForm> = {
    title: "features/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecoratorWithState({
        loginForm: {
            username: "admin", password: "123",
        },
    })],
};

export const WithError: Story = {
    args: {},
    decorators: [StoreDecoratorWithState({
        loginForm: {
            username: "admin", password: "123", error: "Ошибка!!!",
        },
    })],
};

export const WithLoading: Story = {
    args: {},
    decorators: [StoreDecoratorWithState({
        loginForm: {
            username: "admin", password: "123", isLoading: true,
        },
    })],
};
