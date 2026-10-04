import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./DropdownMenu.js";
import { StoreDecoratorWithState } from "@/shared/config/storybook/StoreDecorator/StoreDecorator.js";
import { userReducer, UsersRoles } from "@/entities/User/index.js";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator/RouterDecorator.js";


const meta: Meta<typeof DropdownMenu> = {
    title: "features/dropdownMenu",
    component: DropdownMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: { },

} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;


export const IsAdmin: Story = {
    args: {  },
    decorators: [
        StoreDecoratorWithState({
            user: {
                authData: {
                    id: "1",
                    username: "nik",
                    roles: [UsersRoles.ADMIN]
                }
            }
        }, {user: userReducer}),
        RouterDecorator("/", "/"),
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        )
    ],
};

export const User: Story = {
    args: {  },
    decorators: [
        StoreDecoratorWithState({
            user: {
                authData: {  
                    id: "1",
                    username: "nik",
                    roles: [UsersRoles.USER] }
            }
        }, {user: userReducer}),
        RouterDecorator("/", "/"),
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        )
    ],
};

export const NotUserAuthData: Story = {
    args: {  },
    decorators: [
        StoreDecoratorWithState({
            user: {  }
        }, {user: userReducer}),
        RouterDecorator("/", "/"),
        (Story) => (
            <div style={{ width: "300px", padding: "200px" }}>
                <Story />
            </div>
        )
    ],
};

