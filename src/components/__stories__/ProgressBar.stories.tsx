import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { ProgressBar, ProgressBarProps } from "../ProgressBar";

export default {
  title: "components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    className: hideControl,
    size: {
      name: "size",
      options: ["small", "medium", "large"],
      control: {
        type: "select"
      }
    },
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

export const Standard: StoryFn<ProgressBarProps> = (args) => (
  <ProgressBar {...args} />
);

Standard.args = {
  percentage: 50,
  size: "medium",
  style: "primary"
};
