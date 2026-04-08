import type { Meta, StoryObj } from "@storybook/react";
import { ArticleType, ArticleTypeView, ArticleSortField } from "entities/Article/model/types/article";
import { StoreDecoratorWithState } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { addArticlesListReducer } from "features/ArticlesList/model/slices/addArticlesListSlice";
import ArticlesPage from "./ArticlesPage";

const meta: Meta<typeof ArticlesPage> = {
    title: "pages/ArticlesPage/ArticlesPage",
    component: ArticlesPage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},

} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecoratorWithState({
            articlesList: {
                ids: ["1", "2"],
                entities: {
                    1: {
                        id: "1",
                        user: { id: "u1", username: "nikita" },
                        title: "Статья 1",
                        subtitle: "Подзаголовок 1",
                        img: "img1.jpg",
                        views: 100,
                        createdAt: "fdgfgd",
                        type: [ArticleType.ALL],
                        blocks: [],
                    },
                    2: {
                        id: "2",
                        user: { id: "u2", username: "alex" },
                        title: "Статья 2",
                        subtitle: "Подзаголовок 2",
                        img: "img2.jpg",
                        views: 50,
                        createdAt: "fjdgfjdg",
                        type: [ArticleType.ALL],
                        blocks: [],
                    },
                },
                isLoading: false,
                error: undefined,
                view: ArticleTypeView.LIST,
                _inited: true,
            },
        }, { articlesList: addArticlesListReducer }),
    ],
};
