import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Alert, AlertProps } from "../Alert";

export default {
  title: "components/Alert",
  component: Alert,
  argTypes: {
    className: hideControl
  }
};

export const Standard: StoryFn<AlertProps> = (args) => <Alert {...args} />;
Standard.args = {
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  title: "",
  error: false,
  warning: false,
  success: false
};
