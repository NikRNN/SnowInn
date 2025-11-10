import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator.js";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { Modal } from "./Modal.js";

const meta: Meta<typeof Modal> = {
    title: "shared/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { onClose: fn(), isOpen: true },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        children: "lorem100 yhjhjhjh yhjrhjhgjhgjfhgjhgj jyjhgjrhthdyteyjhitohy hytjhtjhrtt gbeythnynrt hynrtyhnrthnrhnrh",
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Light: Story = {
    args: {
        children: "lorem100 yhjhjhjh yhjrhjhgjhgjfhgjhgj jyjhgjrhthdyteyjhitohy hytjhtjhrtt gbeythnynrt hynrtyhnrthnrhnrh",
        isOpen: true,
    },

};
