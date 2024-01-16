import { StoryFn } from "@storybook/react";

import { hideControl } from "../../utils/hideControl";
import { Form, FormProps, Input } from "../forms";

export default {
  title: "components/forms/Form",
  component: Form,
  argTypes: {
    className: hideControl,
    children: hideControl
  }
};

export const Standard: StoryFn<FormProps> = (args) => <Form {...args} />;
Standard.args = {
  children: <Input placeholder="Insert text..." />
};

export const WithFields: StoryFn<FormProps> = (args) => <Form {...args} />;
WithFields.args = {
  children: (
    <>
      <Form.Field label="Name" id="name">
        <Input id="name" placeholder="Insert name..." />
      </Form.Field>
      <Form.Field label="City" id="city">
        <Input id="city" placeholder="Insert city..." />
      </Form.Field>
    </>
  )
};
