import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select.js";

const meta = {
    title: "shared/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "45454",
        options: [
            { value: "ru", content: "Русский" },
            { value: "en", content: "English" },
            { value: "es", content: "Español" },
        ],
    },
};
