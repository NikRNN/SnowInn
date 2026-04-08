import type { Meta, StoryObj } from "@storybook/react";
import { ArticleType, ArticleTypeView, ArticleSortField } from "entities/Article/model/types/article";
import { StoreDecoratorWithState } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { addArticlesListReducer } from "features/ArticlesList/model/slices/addArticlesListSlice";
import { ArticlesPageFilters } from "./ArticlesPageFilters";

const meta: Meta<typeof ArticlesPageFilters> = {
    title: "pages/ArticlesPage/ArticlesPageFilters",
    component: ArticlesPageFilters,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
    decorators: [
        StoreDecoratorWithState(
            {
                articlesList: {
                    view: ArticleTypeView.LIST,
                    order: "asc",
                    sort: ArticleSortField.CREATED,
                    search: "",
                    type: ArticleType.ALL,
                    page: 1,
                },
            },
            { articlesList: addArticlesListReducer },
        ),
    ],

};
