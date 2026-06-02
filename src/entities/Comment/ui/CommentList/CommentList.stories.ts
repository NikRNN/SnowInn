import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList.js";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator.js";

const meta: Meta<typeof CommentList> = {
    title: "entities/Comment/CommentList",
    component: CommentList,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isLoading: false,
        comments: [
            {
                id: "1",
                text: "Это первый комментарий",
                user: {
                    id: "1",
                    username: "admin",
                },
            },
            {
                id: "2",
                text: "Это второй комментарий",
                user: {
                    id: "2",
                    username: "admin2",
                },
            },
        ],

    },
    decorators: [RouterDecorator("/", "/*")]
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
        comments: [
            {
                id: "1",
                text: "Это первый комментарий",
                user: {
                    id: "1",
                    username: "admin",
                },
            },
            {
                id: "2",
                text: "Это второй комментарий",
                user: {
                    id: "2",
                    username: "admin2",
                },
            },
        ],
    },
    decorators: [RouterDecorator("/", "/*")]
};

export const IsEmpty: Story = {
    args: {
        isLoading: false,
        comments: [],
    },
    decorators: [RouterDecorator("/", "/*")]
};
