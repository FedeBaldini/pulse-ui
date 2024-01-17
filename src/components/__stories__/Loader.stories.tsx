import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Loader, LoaderProps } from "../Loader";

export default {
  title: "components/Loader",
  component: Loader,
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
    },
    align: {
      name: "align",
      options: ["left", "center", "right"],
      control: {
        type: "select"
      }
    }
  }
};

export const Standard: StoryFn<LoaderProps> = (args) => <Loader {...args} />;
Standard.args = {
  size: "medium",
  style: "primary",
  align: "left",
  inline: false
};
