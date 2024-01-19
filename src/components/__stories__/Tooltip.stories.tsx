import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Button } from "../Button";
import { Tooltip, TooltipProps } from "../Tooltip";

export default {
  title: "components/Tooltip",
  component: Tooltip,
  argTypes: {
    className: hideControl
  }
};

export const Standard: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />;
Standard.args = {
  children: <Button>Hover me</Button>,
  message: "A nice message in a nice tooltip!"
};
