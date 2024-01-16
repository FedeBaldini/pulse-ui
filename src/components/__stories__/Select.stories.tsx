import { StoryFn } from "@storybook/react";

import { hideControl } from "../../utils/hideControl";
import { Select, SelectProps } from "../forms";

export default {
  title: "components/forms/Select",
  component: Select,
  argTypes: {
    className: hideControl,
    emptyOption: hideControl,
    options: hideControl
  }
};

export const Standard: StoryFn<SelectProps> = (args) => <Select {...args} />;
Standard.args = {
  placeholder: "Insert text here...",
  small: false,
  disabled: false,
  error: false,
  warning: false,
  success: false,
  emptyOption: { label: "Select a value...", value: "" },
  options: [
    { label: "First", value: "first" },
    { label: "Second", value: "second" },
    { label: "Third", value: "third" }
  ]
};
