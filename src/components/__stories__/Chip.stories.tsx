import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Chip, ChipProps } from "../Chip";

export default {
  title: "components/Chip",
  component: Chip,
  argTypes: {
    className: hideControl,
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
};

export const Standard: StoryFn<ChipProps> = (args) => <Chip {...args} />;
Standard.args = {
  children: "Chip",
  style: "primary"
};
