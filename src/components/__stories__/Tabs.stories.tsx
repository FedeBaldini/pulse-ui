import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Tabs, TabsProps } from "../Tabs";

export default {
  title: "components/Tabs",
  component: Tabs,
  argTypes: {
    className: hideControl
  }
};

export const Standard: StoryFn<TabsProps> = (args) => (
  <Tabs {...args}>
    <Tabs.Item disabled>First disabled</Tabs.Item>
    <Tabs.Item>Second</Tabs.Item>
    <Tabs.Item active>Third active</Tabs.Item>
    <Tabs.Item>Fourth</Tabs.Item>
  </Tabs>
);
