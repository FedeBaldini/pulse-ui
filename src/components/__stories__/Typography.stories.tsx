import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Typography, TypographyProps } from "../Typography";

export default {
  title: "components/Typography",
  component: Typography,
  argTypes: {
    className: hideControl,
    type: {
      name: "type",
      options: [
        "small",
        "medium",
        "large",
        "extraLarge",
        "leadSmall",
        "leadMedium",
        "leadLarge",
        "leadExtraLarge",
        "boldSmall",
        "boldMedium",
        "boldLarge",
        "boldExtraLarge"
      ],
      control: {
        type: "select"
      }
    }
  }
};

export const Standard: StoryFn<TypographyProps> = (args) => (
  <Typography {...args} />
);
Standard.args = {
  children: "Typography",
  type: "medium"
};
