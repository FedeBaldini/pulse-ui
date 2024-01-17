import { Button, Comment, Title } from "@fbaldini/pulse-ui";

export function CommentsSection() {
  return (
    <div className="my-8">
      <Title as="h3">Comments</Title>
      <Title as="h5" className="my-2">
        Default
      </Title>
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
      <Title as="h5" className="my-2">
        Group
      </Title>
      <Comment.Group>
        {[0, 1, 2, 3].map((key) => (
          <Comment key={key}>
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
        ))}
      </Comment.Group>
      <Title as="h5" className="my-2">
        Group with separator
      </Title>
      <Comment.Group separator>
        {[4, 5, 6].map((key) => (
          <Comment key={key}>
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
        ))}
      </Comment.Group>
    </div>
  );
}
