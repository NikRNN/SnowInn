import type { Meta, StoryObj } from "@storybook/react";
import { CustomPopover } from "./CustomPopover.js";
import { Button } from "../Button/Button.js";


const meta: Meta<typeof CustomPopover> = {
    title: "shared/CustomPopover",
    component: CustomPopover,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: { },

} satisfies Meta<typeof CustomPopover>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: { 
        trigger: <Button>Open!...</Button>,
        children: (
            <>
                <div>Первое уведомление...</div>
                <div>Второе уведомление...</div>
                <div>Третье уведомление...</div>
            </>
        ),
        direction: "top-left"
    },
    decorators: [
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        ),
    ],
};

export const TopRight: Story = {
    args: { 
        trigger: <Button>Open!...</Button>,
        children: (
            <>
                <div>Первое уведомление...</div>
                <div>Второе уведомление...</div>
                <div>Третье уведомление...</div>
            </>
        ),
        direction: "top-right"
    },
    decorators: [
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        ),
    ],
};

export const BottomLeft: Story = {
    args: { 
        trigger: <Button>Open!...</Button>,
        children: (
            <>
                <div>Первое уведомление...</div>
                <div>Второе уведомление...</div>
                <div>Третье уведомление...</div>
            </>
        ),
        direction: "bottom-left"
    },
    decorators: [
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        ),
    ],
};

export const BottomRight: Story = {
    args: { 
        trigger: <Button>Open!...</Button>,
        children: (
            <>
                <div>Первое уведомление...</div>
                <div>Второе уведомление...</div>
                <div>Третье уведомление...</div>
            </>
        ),
        direction: "bottom-right"
    },
    decorators: [
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        ),
    ],
};







