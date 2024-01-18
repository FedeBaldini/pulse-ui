import { render, screen } from "@testing-library/react";

import { GradientSegment, GradientSegmentProps } from "../GradientSegment";

describe("components/GradientSegment", () => {
  it("allows to provide additional classname", () => {
    render(
      <GradientSegment
        children="Gradient segment"
        className="additional-class"
      />
    );
    expect(screen.getByText("Gradient segment")).toHaveClass(
      "additional-class"
    );
  });

  it.each<GradientSegmentProps["style"]>([
    "primary",
    "secondary",
    "tertiary",
    "error",
    "warning",
    "success",
    "neutral"
  ])("renders as %s", (style) => {
    render(<GradientSegment style={style} children="Gradient segment" />);
    expect(screen.getByText("Gradient segment")).toHaveClass(
      `from-${style} via-${style}-light to-${style}-extra-light`
    );
  });
});
