import type { Meta, StoryObj } from "@storybook/react";
import { CommentCard } from "./CommentCard.js";

const meta: Meta<typeof CommentCard> = {
    title: "entities/Comment/CommentCard",
    component: CommentCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isLoading: false,
        comment:
            {
                id: "1",
                text: "Это первый комментарий",
                user: {
                    id: "1",
                    username: "admin",
                },
            },

    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
        comment:
            {
                id: "1",
                text: "Это первый комментарий",
                user: {
                    id: "1",
                    username: "admin",
                },
            },

    },
};
