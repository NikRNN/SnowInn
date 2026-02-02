import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar.js";
import AvatarImg from "./Avatar.webp";

const meta = {
    title: "shared/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { size: 120, src: AvatarImg },
};

export const Small: Story = {
    args: { size: 50, src: AvatarImg },
};
