import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Switch, SwitchProps } from "../forms";

export default {
  title: "components/forms/Switch",
  component: Switch,
  argTypes: {
    className: hideControl,
    labelClassName: hideControl,
    id: hideControl
  }
};

export const Standard: StoryFn<SwitchProps> = (args) => <Switch {...args} />;
Standard.args = {
  id: "value",
  label: "Label",
  disabled: false
};
