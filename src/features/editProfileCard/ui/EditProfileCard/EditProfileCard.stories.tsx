import type { Meta, StoryObj } from "@storybook/react";
import { EditProfileCard } from "./EditProfileCard.js";
import { StoreDecoratorWithState } from "shared/config/storybook/StoreDecorator/StoreDecorator.js";
import { Country } from "entities/Country/index.js";
import { ProfileReducer } from "../../index.js";


const meta: Meta<typeof EditProfileCard> = {
    title: "features/EditProfileCard",
    component: EditProfileCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: { },
    args: { },
} satisfies Meta<typeof EditProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { id: "1" },
    decorators: [
        StoreDecoratorWithState({
            profile: {
                dataForm: {
                    id: "1",
                    firstname: "nik",
                    lastname: "romanov",
                    age: 33,
                    country: Country.Russia,
                    city: "Sarov",
                    username: "nik",
                    avatar: "imgimgimgimg"
                },
                isLoading: false,
                readonly: true,
            }
        }, {profile: ProfileReducer})
    ]
};

export const CanEdit: Story = {
    args: { id: "1" },
    decorators: [
        StoreDecoratorWithState({
            profile: {
                dataForm: {
                    id: "1",
                    firstname: "nik",
                    lastname: "romanov",
                    age: 33,
                    country: Country.Russia,
                    city: "Sarov",
                    username: "nik",
                    avatar: "imgimgimgimg"
                },
                isLoading: false,
                readonly: false,
            }
        }, {profile: ProfileReducer})
    ]
};