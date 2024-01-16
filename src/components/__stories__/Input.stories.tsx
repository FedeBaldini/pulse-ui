import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Input, InputProps } from "../forms";

export default {
  title: "components/forms/Input",
  component: Input,
  argTypes: {
    className: hideControl
  }
};

export const Standard: StoryFn<InputProps> = (args) => <Input {...args} />;
Standard.args = {
  placeholder: "Insert text here...",
  small: false,
  disabled: false,
  error: false,
  warning: false,
  success: false
};
