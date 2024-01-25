import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Menu, MenuProps } from "../Menu";

export default {
  title: "components/Menu",
  component: Menu,
  argTypes: {
    className: hideControl
  }
};

export const Standard: StoryFn<MenuProps> = (args) => (
  <Menu {...args}>
    <Menu.Item>First item</Menu.Item>
    <Menu.Item>Second item</Menu.Item>
    <Menu.Item disabled>Third item disabled</Menu.Item>
    <Menu.Item>Fourth item</Menu.Item>
  </Menu>
);
Standard.args = { isOpen: true };
