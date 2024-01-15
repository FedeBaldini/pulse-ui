import { StoryFn } from "@storybook/react";

import { Button, ButtonProps } from "../Button";

export default {
  title: "components / Button",
  component: Button,
  argTypes: {
    className: {
      table: {
        disable: true
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

export const Standard: StoryFn<ButtonProps> = (args) => <Button {...args} />;
Standard.args = {
  children: "Click me",
  style: "primary",
  outlined: false,
  small: false,
  disabled: false
};
