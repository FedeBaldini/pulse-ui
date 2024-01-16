import { StoryFn } from "@storybook/react";

import { hideControl } from "../../utils/hideControl";
import { TextArea, TextAreaProps } from "../forms";

export default {
  title: "components/forms/TextArea",
  component: TextArea,
  argTypes: {
    className: hideControl
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
