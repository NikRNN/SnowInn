import type { Meta, StoryObj } from "@storybook/react";
import { ArticleType } from "entities/Article/model/types/article";
import { ArticleTypeTabs } from "./ArticleTypeTabs";

const meta: Meta<typeof ArticleTypeTabs> = {
    title: "entities/ArticleTypeTabs/ArticleTypeTabs",
    component: ArticleTypeTabs,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: ArticleType.SKI_TRACK,
        onChangeType: () => alert("dispatch"),
    },

};
