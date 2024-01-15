import type { StoryObj } from "@storybook/react";
import { Button } from "../Button";
declare const meta: {
    title: string;
    component: typeof Button;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
