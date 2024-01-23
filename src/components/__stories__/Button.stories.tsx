import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Button, ButtonFileUploadProps, ButtonProps } from "../Button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    className: hideControl,
    onClick: hideControl,
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

export const ButtonFileUpload: StoryFn<ButtonFileUploadProps> = (args) => (
  <Button.FileUpload {...args} />
);
ButtonFileUpload.args = {
  children: "Click me",
  style: "primary",
  outlined: false,
  small: false,
  disabled: false
};
