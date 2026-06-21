import type { Meta, StoryObj } from "@storybook/react";
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
