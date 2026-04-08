import type { Meta, StoryObj } from "@storybook/react";
import { IconWrapper } from "./IconWrapper";
import EyeIconArticle from "../../assets/icons/eye-20-20.svg";

const EyeIcon = EyeIconArticle as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const meta: Meta<typeof IconWrapper> = {
    title: "shared/IconWrapper",
    component: IconWrapper,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},

} satisfies Meta<typeof IconWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        Svg: EyeIcon,
    },

};
