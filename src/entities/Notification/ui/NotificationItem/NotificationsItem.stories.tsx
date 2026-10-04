import type { Meta, StoryObj } from "@storybook/react";
import { NotificationItem } from "./NotificationItem.js";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator/RouterDecorator.js";


const meta: Meta<typeof NotificationItem> = {
    title: "entities/Notification/NotificationItem",
    component: NotificationItem,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: { },

} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: { 
        item: {
            id: "1",
            title: "Внимание",
            description: "Важное уведомление",
            href: "http/ggggg.com"
        }
    },
    decorators: [
        RouterDecorator("/", "/")
    ],
};