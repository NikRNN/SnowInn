import type { Meta, StoryObj } from "@storybook/react";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator/StyleDecorator.js";
import { Card } from "./Card.js";
import { Text } from "../Text/Text.js";

const meta: Meta<typeof Card> = {
    title: "shared/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <Text title="TITLE" text="TEXT" />,
    },
    decorators: [StyleDecorator],

};
