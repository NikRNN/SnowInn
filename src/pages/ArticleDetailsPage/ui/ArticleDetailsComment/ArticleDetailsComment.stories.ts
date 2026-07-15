import type { Meta, StoryObj } from "@storybook/react";
import {ArticleDetailsComment} from "./ArticleDetailsComment.js";
import { StoreDecoratorWithState } from "shared/config/storybook/StoreDecorator/StoreDecorator.js";
import { articleDetailsPageCommentsReducer } from "../../model/slices/articleDetailsPageCommentSlice/articleDetailsPageCommentsSlice.js";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator.js";

const meta = {
    title: "pages/ArticleDetailstPage/ArticleDetailsComment",
    component: ArticleDetailsComment,
    parameters: {
        layout: "centered",
    },
    
    tags: ["autodocs"],
    argTypes: { },

    args: { },
} satisfies Meta<typeof ArticleDetailsComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {id: "1"},
    decorators: [
        StoreDecoratorWithState({
            articleDetailsPage: {
                comments: {
                    isLoading: false,
                    error: undefined,
                    ids: ["1", "2"],
                    entities: {
                        "1": {
                            id: "1",
                            text: "Первый комментарий",
                            user: {
                                id: "1",
                                username: "admin",
                            },
                        },
                        "2": {
                            id: "2",
                            text: "Второй комментарий",
                            user: {
                                id: "2",
                                username: "user",
                            },
                        },
                    },
                }
            }
        }, {articleDetailsPage: articleDetailsPageCommentsReducer}),
        RouterDecorator("/articles/1", "/articles/:id")
    ],
};

export const WihoutComments: Story = {
    args: {id: "1"},
    decorators: [
        StoreDecoratorWithState({
            articleDetailsPage: {
                comments: {
                    isLoading: false,
                    error: undefined,
                    ids: [],
                    entities: {},
                }
            }
        }, {articleDetailsPage: articleDetailsPageCommentsReducer}),
        RouterDecorator("/articles/1", "/articles/:id")
    ],
};