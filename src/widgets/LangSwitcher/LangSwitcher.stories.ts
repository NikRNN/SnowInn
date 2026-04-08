import type { Meta, StoryObj } from "@storybook/react";
import { withTranslation } from "shared/config/storybook/TranslationDecorator/translationDecorator";
import { LangSwitcher } from "./LangSwitcher";

const meta: Meta<typeof LangSwitcher> = {
    title: "widgets/LangSwitcher",
    component: LangSwitcher,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},

    args: {},

} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Short: Story = {
    args: { short: true },
    decorators: [withTranslation],

};

export const Long: Story = {
    args: { short: false },
    decorators: [withTranslation],

};
