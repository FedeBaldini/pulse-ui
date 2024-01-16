import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Checkbox, CheckboxProps } from "../forms";

export default {
  title: "components/forms/Checkbox",
  component: Checkbox,
  argTypes: {
    className: hideControl,
    labelClassName: hideControl,
    id: hideControl
  }
};

export const Standard: StoryFn<CheckboxProps> = (args) => (
  <Checkbox {...args} />
);
Standard.args = {
  id: "value",
  label: "Label",
  disabled: false
};
