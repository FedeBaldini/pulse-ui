import { StoryFn } from "@storybook/react";

import { hideControl } from "../../utils/hideControl";
import { Tag, TagProps } from "../Tag";

export default {
  Tag: "components/Tag",
  component: Tag,
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

export const Standard: StoryFn<TagProps> = (args) => <Tag {...args} />;
Standard.args = {
  children: "Tag",
  style: "primary"
};
