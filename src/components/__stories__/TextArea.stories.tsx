import { StoryFn } from "@storybook/react";

import { TextArea, TextAreaProps } from "../TextArea";

export default {
  title: "components / TextArea",
  component: TextArea,
  argTypes: {
    className: {
      table: {
        disable: true
      }
    }
  }
};

export const Standard: StoryFn<TextAreaProps> = (args) => (
  <TextArea {...args} />
);
Standard.args = {
  placeholder: "Insert text here...",
  disabled: false,
  error: false,
  warning: false,
  success: false
};
