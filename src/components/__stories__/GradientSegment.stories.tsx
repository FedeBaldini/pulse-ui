import type { Meta, StoryObj } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { GradientSegment } from "../GradientSegment";
import { Title } from "../Title";

const meta = {
  title: "components/GradientSegment",
  component: GradientSegment,
  argTypes: {
    className: hideControl,
    children: hideControl,
    as: hideControl,
    style: {
      name: "style",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "error",
        "warning",
        "success",
        "neutral"
      ],
      control: {
        type: "select"
      }
    }
  }
} satisfies Meta<typeof GradientSegment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: <Title as="h3">Lorem ipsum</Title>,
    style: "primary"
  }
};
