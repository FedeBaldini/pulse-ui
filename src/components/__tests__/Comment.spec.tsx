import { render, screen } from "@testing-library/react";

import { Comment } from "../Comment";

describe("components/Comment", () => {
  it("renders the avatar", () => {
    render(
      <Comment>
        <Comment.Avatar src="./avatar.jpg" />
      </Comment>
    );
    expect(screen.getByTestId("AvatarImage")).toBeInTheDocument();
  });

  it("renders the author", () => {
    render(
      <Comment>
        <Comment.Author children="Federico Baldini" />
      </Comment>
    );
    expect(screen.getByText("Federico Baldini")).toBeInTheDocument();
  });

  it("renders the content", () => {
    render(
      <Comment>
        <Comment.Content children="Content" />
      </Comment>
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders the actions", () => {
    render(
      <Comment>
        <Comment.Actions children="Actions" />
      </Comment>
    );
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("renders the meta", () => {
    render(
      <Comment>
        <Comment.Meta children="Meta" />
      </Comment>
    );
    expect(screen.getByText("Meta")).toBeInTheDocument();
  });
});
