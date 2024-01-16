import { StoryFn } from "@storybook/react";

import { hideControl } from "../../utils/hideControl";
import { Radio, RadioProps } from "../forms";

export default {
  title: "components/forms/Radio",
  component: Radio,
  argTypes: {
    className: hideControl,
    labelClassName: hideControl,
    id: hideControl
  }
};

export const Standard: StoryFn<RadioProps> = (args) => <Radio {...args} />;
Standard.args = {
  id: "value",
  label: "Label",
  disabled: false
};
