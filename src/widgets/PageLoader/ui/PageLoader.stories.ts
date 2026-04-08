import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PageLoader } from "./PageLoader";

const meta: Meta<typeof PageLoader> = {
    title: "widgets/PageLoader",
    component: PageLoader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},

};
