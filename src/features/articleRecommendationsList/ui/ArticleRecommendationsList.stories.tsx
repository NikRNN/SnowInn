import type { Meta, StoryObj } from "@storybook/react";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";
import { articleRecommendationsListStories } from "shared/mocks/handlers";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { StoreDecoratorWithoutState } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: "features/ArticleRecommendationsList",
    component: ArticleRecommendationsList,
    parameters: {
        layout: "centered",

    },
    tags: ["autodocs"],
    argTypes: {

    },

} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    parameters: {
        msw: {
            handlers: articleRecommendationsListStories
            
        }
    },
    decorators: [RouterDecorator("/", "/*"), StoreDecoratorWithoutState]
};
