import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Button } from "../Button";
import { Drawer, DrawerProps } from "../Drawer";
import { Title } from "../Title";

export default {
  title: "components/Drawer",
  component: Drawer,
  argTypes: {
    className: hideControl,
    onClose: hideControl,
    position: {
      name: "position",
      options: ["left", "right"],
      control: {
        type: "select"
      }
    }
  }
};

export const Standard: StoryFn<DrawerProps> = (args) => (
  <Drawer {...args}>
    <Drawer.Header onClose={console.log}>
      <Title className="!m-0" as="h4">
        Title
      </Title>
    </Drawer.Header>
    <Drawer.Content>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in euismod
        nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam posuere,
        nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac mattis lacus
        velit a tellus.
      </p>
    </Drawer.Content>
    <Drawer.Footer>
      <Button>Action</Button>
    </Drawer.Footer>
  </Drawer>
);
Standard.args = {
  isOpen: true,
  position: "left",
  closeOnOutsideClick: false
};
