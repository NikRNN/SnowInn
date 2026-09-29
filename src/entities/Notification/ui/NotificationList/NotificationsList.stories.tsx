import type { Meta, StoryObj } from "@storybook/react";
import { NotificationsList } from "./NotificationsList.js";
import { notificationsListStories } from "shared/mocks/handlers/notificationsList.js";
import { StoreDecoratorWithoutState } from "shared/config/storybook/StoreDecorator/StoreDecorator.js";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator.js";

const meta: Meta<typeof NotificationsList> = {
    title: "entities/Notification/NotificationList",
    component: NotificationsList,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: { },

} satisfies Meta<typeof NotificationsList>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {  },
    parameters: {
        msw: {
            handlers: notificationsListStories
                
        }
    },
    decorators: [
        StoreDecoratorWithoutState, RouterDecorator("/", "/"),
    ],
};

