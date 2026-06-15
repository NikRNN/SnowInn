import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown.js";
import { Button } from "../Button/Button.js";
import { RouterDecorator } from "../../config/storybook/RouterDecorator/RouterDecorator.js";



const meta: Meta<typeof Dropdown> = {
    title: "shared/Dropdown",
    component: Dropdown,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: { },

} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: { 
        trigger: <Button>Open!...</Button>,
        items: [
            {
                content: "firstfirstfirstfirstfirstfirstfirst"
            },
            {
                content: "secondsecondsecondsecondsecondsecond"
            },
            {
                content: "thirdthirdthirdthirdthirdthirdthird"
            }
        ],
        direction: "top-left"
    },
    decorators: [
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        ),
        RouterDecorator("/", "/")
    ],
};

export const TopRight: Story = {
    args: { 
        trigger: <Button>Open!...</Button>,
        items: [
            {
                content: "firstfirstfirstfirstfirstfirstfirst"
            },
            {
                content: "secondsecondsecondsecondsecondsecond"
            },
            {
                content: "thirdthirdthirdthirdthirdthirdthird"
            }
        ],
        direction: "top-right"
    },
    decorators: [
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        ),
        RouterDecorator("/", "/")
    ],
};

export const BottomRight: Story = {
    args: { 
        trigger: <Button>Open!...</Button>,
        items: [
            {
                content: "firstfirstfirstfirstfirstfirstfirst"
            },
            {
                content: "secondsecondsecondsecondsecondsecond"
            },
            {
                content: "thirdthirdthirdthirdthirdthirdthird"
            }
        ],
        direction: "bottom-right"
    },
    decorators: [
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        ),
        RouterDecorator("/", "/")
    ],
};

export const BottomLeft: Story = {
    args: { 
        trigger: <Button>Open!...</Button>,
        items: [
            {
                content: "firstfirstfirstfirstfirstfirstfirst"
            },
            {
                content: "secondsecondsecondsecondsecondsecond"
            },
            {
                content: "thirdthirdthirdthirdthirdthirdthird"
            }
        ],
        direction: "bottom-left"
    },
    decorators: [
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        ),
        RouterDecorator("/", "/")
    ],
};

export const BottomLeftWithBackground: Story = {
    args: { 
        trigger: <Button>Open!...</Button>,
        items: [
            {
                content: "firstfirstfirstfirstfirstfirstfirst"
            },
            {
                content: "secondsecondsecondsecondsecondsecond"
            },
            {
                content: "thirdthirdthirdthirdthirdthirdthird"
            }
        ],
        direction: "bottom-left"
    },
    decorators: [
        (Story) => (
            <div style={{ width: "300px", padding: "300px" }}>
                <Story />
            </div>
        ),
        RouterDecorator("/profile/1", "/profile/1")
    ],
};

