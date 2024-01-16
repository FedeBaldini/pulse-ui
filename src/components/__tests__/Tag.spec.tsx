import { render, screen } from "@testing-library/react";

import { Tag, TagProps } from "../Tag";

describe("components/Tag", () => {
  it("allows to provide additional classname", () => {
    render(<Tag className="additional-class">Tag</Tag>);
    expect(screen.getByText("Tag")).toHaveClass("additional-class");
  });

  it.each<TagProps["style"]>([
    "primary",
    "secondary",
    "tertiary",
    "error",
    "warning",
    "success",
    "neutral"
  ])("renders as %s", (style) => {
    render(<Tag style={style} children="Tag" />);
    expect(screen.getByText("Tag")).toHaveClass(
      `bg-${style} border-${style} hover:outline-${style}-extra-light`
    );
  });
});
