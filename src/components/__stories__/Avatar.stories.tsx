import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Avatar, AvatarProps } from "../Avatar";

export default {
  title: "components/Avatar",
  component: Avatar,
  argTypes: {
    className: hideControl
  }
};

export const WithImage: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;
WithImage.args = {
  src: "./avatar.jpg",
  size: "medium",
  firstName: "",
  lastName: ""
};

export const WithInitials: StoryFn<AvatarProps> = (args) => (
  <Avatar {...args} />
);
WithInitials.args = {
  src: "",
  size: "medium",
  firstName: "Federico",
  lastName: "Baldini"
};
