import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PageWrapper } from "./PageWrapper.js";

const meta: Meta<typeof PageWrapper> = {
    title: "widgets/PageWrapper",
    component: PageWrapper,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof PageWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        children: <p>ggrefrg gtrergvre gtrev bvgrebgb bgbg...</p>,
        onScrollEnd: () => alert("Scrolled to end!"),
    },

};
