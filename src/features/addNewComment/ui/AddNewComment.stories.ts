import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecoratorWithState } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { AddNewCommentReducer } from "../model/slices/addNewCommentSlice";
import AddNewComment from "./AddNewComment";

const meta: Meta<typeof AddNewComment> = {
    title: "features/AddNewComment",
    component: AddNewComment,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

} satisfies Meta<typeof AddNewComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecoratorWithState(
    
        {
            addNewComment: {
                text: "first comment",
            },
        },
    
        {
            addNewComment: AddNewCommentReducer,
        },
    )],
};
