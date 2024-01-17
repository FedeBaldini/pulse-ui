import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Button } from "../Button";
import { Comment, CommentGroupProps, CommentProps } from "../Comment";

export default {
  title: "components/Comment",
  component: Comment,
  argTypes: {
    className: hideControl,
    children: hideControl
  }
};

export const Standard: StoryFn<CommentProps> = (args) => (
  <Comment {...args}>
    <Comment.Avatar src="./avatar.jpg" />
    <Comment.Author>Federico Baldini</Comment.Author>
    <Comment.Content>
      This has been very useful for my research. Thanks as well!
    </Comment.Content>
    <Comment.Actions>
      <Button small outlined style="neutral">
        Cancel
      </Button>
      <Button small>Reply</Button>
    </Comment.Actions>
    <Comment.Meta>Just now</Comment.Meta>
  </Comment>
);

export const WithGroup: StoryFn<CommentGroupProps> = (args) => (
  <Comment.Group {...args}>
    <Comment>
      <Comment.Avatar src="./avatar.jpg" />
      <Comment.Author>Federico Baldini</Comment.Author>
      <Comment.Content>
        This has been very useful for my research. Thanks as well!
      </Comment.Content>
      <Comment.Actions>
        <Button small outlined style="neutral">
          Cancel
        </Button>
        <Button small>Reply</Button>
      </Comment.Actions>
      <Comment.Meta>Just now</Comment.Meta>
    </Comment>
    <Comment>
      <Comment.Avatar src="./avatar.jpg" />
      <Comment.Author>Federico Baldini</Comment.Author>
      <Comment.Content>
        This has been very useful for my research. Thanks as well!
      </Comment.Content>
      <Comment.Actions>
        <Button small outlined style="neutral">
          Cancel
        </Button>
        <Button small>Reply</Button>
      </Comment.Actions>
      <Comment.Meta>Just now</Comment.Meta>
    </Comment>
    <Comment>
      <Comment.Avatar src="./avatar.jpg" />
      <Comment.Author>Federico Baldini</Comment.Author>
      <Comment.Content>
        This has been very useful for my research. Thanks as well!
      </Comment.Content>
      <Comment.Actions>
        <Button small outlined style="neutral">
          Cancel
        </Button>
        <Button small>Reply</Button>
      </Comment.Actions>
      <Comment.Meta>Just now</Comment.Meta>
    </Comment>
  </Comment.Group>
);
WithGroup.args = {
  separator: false
};
