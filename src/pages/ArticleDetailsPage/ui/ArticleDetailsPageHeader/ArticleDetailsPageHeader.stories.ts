import type { Meta, StoryObj } from "@storybook/react";
import {ArticleDetailsPageHeader} from "./ArticleDetailsPageHeader.js";
import { StoreDecoratorWithState } from "shared/config/storybook/StoreDecorator/StoreDecorator.js";
import { ArticleReducer } from "entities/Article/model/slice/ArticleDetailsSlice.js";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator.js";


const meta = {
    title: "pages/ArticleDetailstPageHeader",
    component: ArticleDetailsPageHeader,
    parameters: {
        layout: "centered",
    },
    
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CanEdit: Story = {
    args: {},
    decorators: [
        StoreDecoratorWithState({
            user: {
                authData: {
                    id: "1",
                },
            },
            articleDetails: {
                data: {
                    id: "2",
                    user: {
                        id: "1",
                        username: "nikita",
                    },
                    title: "Test article",
                    subtitle: "subtitle",
                    img: "",
                    views: 100,
                    createdAt: "01.01.2001",
                    type: [],
                    blocks: [],
                },
            },
        }, {articleDetails:ArticleReducer}),
        RouterDecorator("/articles/123", "/articles/:id")
    ],
};

export const CannotEdit: Story = {
    args: {},
    decorators: [
        StoreDecoratorWithState({
            user: {
                authData: {
                    id: "4",
                },
            },
            articleDetails: {
                data: {
                    id: "2",
                    user: {
                        id: "1",
                        username: "nikita",
                    },
                    title: "Test article",
                    subtitle: "subtitle",
                    img: "",
                    views: 100,
                    createdAt: "01.01.2001",
                    type: [],
                    blocks: [],
                },
            },
        }, {articleDetails:ArticleReducer}),
        RouterDecorator("/articles/123", "/articles/:id")
    ],
};


