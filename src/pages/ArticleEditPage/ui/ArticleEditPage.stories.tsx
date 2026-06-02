import type { Meta, StoryObj } from "@storybook/react";
import ArticleEditPage from "./ArticleEditPage.js";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator.js";


const meta = {
    title: "pages/ArticleEditPage",
    component: ArticleEditPage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {  },
    args: { },
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IsEdit: Story = {
    args: { },
    decorators: [RouterDecorator("/articles/123/edit", "/articles/:id/edit")],
};

export const IsNotEdit: Story = {
    args: {},
    decorators: [RouterDecorator("/articles/new", "/articles/new")],
};

