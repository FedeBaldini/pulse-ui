import { StoryFn } from "@storybook/react";

import { Input, InputProps } from "../Input";

export default {
  title: "components / Input",
  component: Input,
  argTypes: {
    className: {
      table: {
        disable: true
      }
    }
  }
};

export const Standard: StoryFn<InputProps> = (args) => <Input {...args} />;
Standard.args = {
  placeholder: "Insert text here...",
  small: false,
  disabled: false
};
