import type { Meta, StoryObj } from "@storybook/react";
import { CDrawer } from "./CDrawer.js";


const meta: Meta<typeof CDrawer> = {
    title: "shared/CDrawer",
    component: CDrawer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: { },

} satisfies Meta<typeof CDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: { 
        children: (
            <>
                <div>Первое уведомление...</div>
                <div>Второе уведомление...</div>
                <div>Третье уведомление...</div>
            </>
        ),
    },
    decorators: [
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        ),
    ],
};