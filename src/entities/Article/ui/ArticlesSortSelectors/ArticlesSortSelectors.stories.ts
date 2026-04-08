import type { Meta, StoryObj } from "@storybook/react";
import { ArticlesSortSelectors } from "./ArticlesSortSelectors.js";

const meta: Meta<typeof ArticlesSortSelectors> = {
    title: "entities/Article/ArticlesSortSelectors",
    component: ArticlesSortSelectors,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ArticlesSortSelectors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
