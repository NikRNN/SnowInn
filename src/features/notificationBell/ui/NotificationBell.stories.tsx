import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBell } from "./NotificationBell.js";
import { notificationsListStories } from "@/shared/mocks/handlers/notificationsList.js";
import { StoreDecoratorWithoutState } from "@/shared/config/storybook/StoreDecorator/StoreDecorator.js";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator/RouterDecorator.js";

const meta: Meta<typeof NotificationBell> = {
    title: "features/notificationBell",
    component: NotificationBell,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: { },

} satisfies Meta<typeof NotificationBell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { },
    parameters: {
        msw: {
            handlers: notificationsListStories
                    
        }
    },
    decorators: [
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        ),
        StoreDecoratorWithoutState, RouterDecorator("/", "/"),
    ],
};