import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { StoreDecoratorWithState } from "shared/config/storybook/StoreDecorator/StoreDecorator.js";
import { ProfileReducer } from "features/editProfileCard/index.js";
import { Country } from "entities/Country/index.js";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator.js";
import ProfilePage from "./ProfilePage.js";
import Avatar from "../../../shared/assets/icons/avatar.jpg";
import { truncate } from "node:fs";

const meta = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: { },
    decorators: [StoreDecoratorWithState({
        profile: {
            isLoading: false,
            readonly: true,
            dataForm: {
                id: "1",
                firstname: "nik",
                lastname: "fgffgf",
                age: 44,
                country: Country.Austria,
                city: "Sarov",
                username: "ggfgf",
                avatar: Avatar,
            },

        },
    }, { profile: ProfileReducer }), RouterDecorator("/profile/1", "/profile/:id")],

};

export const LightNotFound: Story = {
    args: { },
    decorators: [StoreDecoratorWithState({
        profile: {
            isLoading: false,
            readonly: true,
            dataForm: {
                id: "1",
                firstname: "nik",
                lastname: "fgffgf",
                age: 44,
                country: Country.Austria,
                city: "Sarov",
                username: "ggfgf",
                avatar: Avatar,
            },

        },
    }, { profile: ProfileReducer }), RouterDecorator("/", "/*")],

};

export const LightIsLoading: Story = {
    args: { },
    decorators: [StoreDecoratorWithState({
        profile: {
            isLoading: true,
            readonly: true,
            dataForm: {
                id: "1",
                firstname: "nik",
                lastname: "fgffgf",
                age: 44,
                country: Country.Austria,
                city: "Sarov",
                username: "ggfgf",
                avatar: Avatar,
            },

        },
    }, { profile: ProfileReducer }), RouterDecorator("/profile/1", "/profile/:id")],

};

export const Dark: Story = {
    args: { },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecoratorWithState({
        profile: {
            isLoading: false,
            readonly: true,
            dataForm: {
                firstname: "nik",
                lastname: "fgffgf",
                age: 44,
                country: Country.Austria,
                city: "Sarov",
                username: "ggfgf",
                avatar: Avatar,
            },
        },
    }, { profile: ProfileReducer }), RouterDecorator("/profile/1", "/profile/:id")],
};

export const DarkNotFound: Story = {
    args: { },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecoratorWithState({
        profile: {
            isLoading: false,
            readonly: true,
            dataForm: {
                firstname: "nik",
                lastname: "fgffgf",
                age: 44,
                country: Country.Austria,
                city: "Sarov",
                username: "ggfgf",
                avatar: Avatar,
            },
        },
    }, { profile: ProfileReducer }), RouterDecorator("/", "/*")],
};

export const DarkIsLoading: Story = {
    args: { },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecoratorWithState({
        profile: {
            isLoading: true,
            readonly: true,
            dataForm: {
                firstname: "nik",
                lastname: "fgffgf",
                age: 44,
                country: Country.Austria,
                city: "Sarov",
                username: "ggfgf",
                avatar: Avatar,
            },
        },
    }, { profile: ProfileReducer }), RouterDecorator("/profile/1", "/profile/:id")],
};