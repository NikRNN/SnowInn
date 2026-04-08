import type { Meta, StoryObj } from "@storybook/react";
import { ArticleType, ArticleTypeView, ArticleSortField } from "entities/Article/model/types/article";
import { StoreDecoratorWithState } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { addArticlesListReducer } from "features/ArticlesList/model/slices/addArticlesListSlice";
import { ArticleViewSelector } from "./ArticleViewSelector";

const meta: Meta<typeof ArticleViewSelector> = {
    title: "pages/ArticlesPage/ArticleViewSelector",
    component: ArticleViewSelector,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },

};
