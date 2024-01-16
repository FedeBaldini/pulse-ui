import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Title, TitleProps } from "../Title";

export default {
  title: "components/Title",
  component: Title,
  argTypes: {
    className: hideControl,
    as: {
      name: "as",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: {
        type: "select"
      }
    }
  }
};

export const Standard: StoryFn<TitleProps> = (args) => <Title {...args} />;
Standard.args = {
  children: "Title",
  as: "h1"
};
