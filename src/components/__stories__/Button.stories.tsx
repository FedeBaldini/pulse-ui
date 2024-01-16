import { StoryFn } from "@storybook/react";

import { hideControl } from "../../utils/hideControl";
import { Button, ButtonProps } from "../Button";

export default {
  title: "components/Button",
  component: Button,
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

export const Standard: StoryFn<ButtonProps> = (args) => <Button {...args} />;
Standard.args = {
  children: "Click me",
  style: "primary",
  outlined: false,
  small: false,
  disabled: false
};
