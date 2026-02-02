import type { Meta, StoryObj } from "@storybook/react";
import { Country } from "entities/Country/index.js";
import { ProfileCard } from "./ProfileCard.js";
import ProfileSVG from "../../../../shared/assets/icons/profile.svg";
import Avatar from "../../../../shared/assets/icons/avatar.jpg";

const meta: Meta<typeof ProfileCard> = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            firstname: "nik",
            lastname: "fgffgf",
            age: 44,
            country: Country.Austria,
            city: "Sarov",
            username: "ggfgf",
            avatar: Avatar,

        },
    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const WithError: Story = {
    args: {
        error: "error",
    },
};
