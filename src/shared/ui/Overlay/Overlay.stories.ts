import type { Meta, StoryObj } from "@storybook/react";
import { Overlay } from "./Overlay";


const meta = {
    title: "shared/ui/Overlay",
    component: Overlay,
    parameters: {
        layout: "fullscreen",
    },
    args: {
        onClick: () => console.log("Overlay clicked"),
    },
} satisfies Meta<typeof Overlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};