import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Button } from "../Button";
import { Card, CardProps } from "../Card";

export default {
  title: "components/Card",
  component: Card,
  argTypes: {
    className: hideControl
  }
};

export const Standard: StoryFn<CardProps> = (args) => (
  <Card {...args}>
    <Card.Header>
      <div className="flex items-center justify-between">
        <span>Header</span>
        <Button small outlined children="Action" />
      </div>
    </Card.Header>
    <Card.Image src="/avatar_square.png" />
    <Card.Content>Content</Card.Content>
    <Card.Title>Title</Card.Title>
    <Card.SubTitle>Subtitle</Card.SubTitle>
    <Card.Footer>
      <div className="flex items-center justify-between">
        <span>Footer</span>
        <Button small outlined children="Action" />
      </div>
    </Card.Footer>
  </Card>
);
