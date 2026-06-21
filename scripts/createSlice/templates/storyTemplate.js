export default (layer, componentName) => `import type { Meta, StoryObj } from "@storybook/react";
import { ${componentName} } from "./${componentName}.js";


const meta: Meta<typeof ${componentName}> = {
    title: "${layer}/${componentName}",
    component: ${componentName},
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: { },
    args: { },
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {  },
};`;
