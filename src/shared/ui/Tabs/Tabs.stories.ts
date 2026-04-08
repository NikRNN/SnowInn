import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Tabs } from "./Tabs.js";

const meta = {
    title: "shared/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        tabsList: [
            {
                value: "tab 1",
                content: "tab 1",
            },
            {
                value: "tab 2",
                content: "tab 2",
            },
            {
                value: "tab 3",
                content: "tab 3",
            },
        ],
        value: "tab 3",
        onTabClick: action("onTabClick"),

    },

};
