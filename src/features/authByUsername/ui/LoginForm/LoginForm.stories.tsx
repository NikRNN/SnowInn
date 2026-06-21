import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecoratorWithState } from "shared/config/storybook/StoreDecorator/StoreDecorator.js";
import { LoginReducer } from "../../model/slice/loginSlice.js";
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
    decorators: [StoreDecoratorWithState(
        {
            loginForm: {
                username: "admin", password: "123", isLoading: false,
            },
        },
        { loginForm: LoginReducer },
    )],
};


export const WithLoading: Story = {
    args: {},
    decorators: [StoreDecoratorWithState(
        {
            loginForm: {
                isLoading: true, username: "admin", password: "123"
            },
        },
        { loginForm: LoginReducer },
    )],
};

export const WithError: Story = {
    args: {},
    decorators: [StoreDecoratorWithState(
        {
            loginForm: {
                isLoading: false, username: "admin", password: "123", error: "Неверный логин или пароль"
            },
        },
        { loginForm: LoginReducer },
    )],
};
