import type { Meta, StoryObj } from "@storybook/react";
import { ListBox } from "./ListBox.js";
import { Country } from "entities/Country/index.js";

const meta: Meta<typeof ListBox> = {
    title: "shared/ListBox",
    component: ListBox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: { },

} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    { value: Country.Austria, content: Country.Austria },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.China, content: Country.China },
    { value: Country.Italy, content: Country.Italy },

];

export const ReadonlyTrue: Story = {
    args: {
        items: items,
        defaultValue: "Введите значение",
        label: "Выберите страну",
        readonly: true
    },
};

export const ReadonlyFalse: Story = {
    args: {
        items: items,
        defaultValue: "Введите значение",
        label: "Выберите страну",
        readonly: false
    },
};

export const ReadonlyTrueWithValue: Story = {
    args: {
        items: items,
        defaultValue: "Введите значение",
        label: "Выберите страну",
        readonly: true,
        value : Country.Austria
    },
};

export const DirectionTop: Story = {
    args: {
        items: items,
        defaultValue: "Введите значение",
        label: "Выберите страну",
        readonly: false,
        value : Country.Austria,
        direction: "top"
    },
};