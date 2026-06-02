import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex.js";

const meta = {
    title: "shared/Flex",
    component: Flex,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },

    args: { },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Row: Story = {
    args: {
        children: (
            <>
                <div>first...</div>
                <div>second...</div>
                <div>third...</div>
            </>
        ),
    }
};

export const Column: Story = {
    args: {
        children: (
            <>
                <div>first...</div>
                <div>second...</div>
                <div>third...</div>
            </>
        ),
        direction: "column"
    }
};

export const Gap4: Story = {
    args: {
        children: (
            <>
                <div>first...</div>
                <div>second...</div>
                <div>third...</div>
            </>
        ),
        gap: "4"
    }
};

export const Gap8: Story = {
    args: {
        children: (
            <>
                <div>first...</div>
                <div>second...</div>
                <div>third...</div>
            </>
        ),
        gap: "8"
    }
};

export const Gap20: Story = {
    args: {
        children: (
            <>
                <div>first...</div>
                <div>second...</div>
                <div>third...</div>
            </>
        ),
        gap: "20"
    }
};

export const Gap25: Story = {
    args: {
        children: (
            <>
                <div>first...</div>
                <div>second...</div>
                <div>third...</div>
            </>
        ),
        gap: "25"
    }
};