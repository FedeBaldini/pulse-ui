import { StoryFn } from "@storybook/react";

import { hideControl } from "../../utils/hideControl";
import { Avatar, AvatarProps } from "../Avatar";

export default {
  title: "components/Avatar",
  component: Avatar,
  argTypes: {
    className: hideControl
  }
};

export const Standard: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;
Standard.args = {
  src: "./avatar.jpg",
  size: "medium",
  firstName: "Federico",
  lastName: "Baldini"
};
