import { action } from "@storybook/addon-actions";
import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Button } from "../Button";
import { Modal, ModalProps } from "../Modal";
import { Title } from "../Title";

export default {
  title: "components/Modal",
  component: Modal,
  argTypes: {
    className: hideControl
  }
};

export const Standard: StoryFn<ModalProps> = (args) => (
  <Modal {...args}>
    <Modal.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in euismod
        nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam posuere,
        nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac mattis lacus
        velit a tellus.
      </p>
      <p>
        Donec viverra, odio a bibendum imperdiet, turpis ipsum vestibulum
        ligula, at suscipit diam ipsum id nunc. Integer accumsan, libero id
        mollis imperdiet, metus velit finibus enim, eget suscipit lectus nisi
        vel nunc.
      </p>
    </Modal.Content>
  </Modal>
);
Standard.args = {
  isOpen: true
};

export const WithHeader: StoryFn<ModalProps> = (args) => (
  <Modal {...args}>
    <Modal.Header onClose={action("onClose")}>
      <Title as="h3">Lorem ipsum dolor sit amet</Title>
    </Modal.Header>
    <Modal.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in euismod
        nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam posuere,
        nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac mattis lacus
        velit a tellus.
      </p>
      <p>
        Donec viverra, odio a bibendum imperdiet, turpis ipsum vestibulum
        ligula, at suscipit diam ipsum id nunc. Integer accumsan, libero id
        mollis imperdiet, metus velit finibus enim, eget suscipit lectus nisi
        vel nunc.
      </p>
    </Modal.Content>
  </Modal>
);
WithHeader.args = {
  isOpen: true
};

export const WithActions: StoryFn<ModalProps> = (args) => (
  <Modal {...args}>
    <Modal.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in euismod
        nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam posuere,
        nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac mattis lacus
        velit a tellus.
      </p>
      <p>
        Donec viverra, odio a bibendum imperdiet, turpis ipsum vestibulum
        ligula, at suscipit diam ipsum id nunc. Integer accumsan, libero id
        mollis imperdiet, metus velit finibus enim, eget suscipit lectus nisi
        vel nunc.
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button children="Action" />
    </Modal.Actions>
  </Modal>
);
WithActions.args = {
  isOpen: true
};

export const Complete: StoryFn<ModalProps> = (args) => (
  <Modal {...args}>
    <Modal.Header onClose={action("onClose")}>
      <Title as="h3">Lorem ipsum dolor sit amet</Title>
    </Modal.Header>
    <Modal.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in euismod
        nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam posuere,
        nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac mattis lacus
        velit a tellus.
      </p>
      <p>
        Donec viverra, odio a bibendum imperdiet, turpis ipsum vestibulum
        ligula, at suscipit diam ipsum id nunc. Integer accumsan, libero id
        mollis imperdiet, metus velit finibus enim, eget suscipit lectus nisi
        vel nunc.
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button children="Action" />
    </Modal.Actions>
  </Modal>
);
Complete.args = {
  isOpen: true
};
