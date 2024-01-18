import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Dropdown, DropdownProps } from "../Dropdown";

export default {
  title: "components/Dropdown",
  component: Dropdown,
  argTypes: {
    className: hideControl,
    style: {
      name: "style",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "error",
        "warning",
        "success",
        "neutral"
      ],
      control: {
        type: "select"
      }
    }
  }
};

export const Standard: StoryFn<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <Dropdown.Item>First</Dropdown.Item>
    <Dropdown.Item>Second</Dropdown.Item>
    <Dropdown.Item disabled>Third disabled</Dropdown.Item>
    <Dropdown.Item>Fourth</Dropdown.Item>
  </Dropdown>
);
Standard.args = {
  label: "Click me",
  style: "primary",
  outlined: false,
  small: false,
  disabled: false
};
