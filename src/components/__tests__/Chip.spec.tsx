import { render, screen } from "@testing-library/react";

import { Chip, ChipProps } from "../Chip";

describe("components/Chip", () => {
  it("allows to provide additional classname", () => {
    render(<Chip className="additional-class">Chip</Chip>);
    expect(screen.getByText("Chip")).toHaveClass("additional-class");
  });

  it.each<ChipProps["style"]>([
    "primary",
    "secondary",
    "tertiary",
    "error",
    "warning",
    "success",
    "neutral"
  ])("renders as %s", (style) => {
    render(<Chip style={style} children="Chip" />);
    expect(screen.getByText("Chip")).toHaveClass(
      `bg-${style} border-${style} hover:outline-${style}-extra-light`
    );
  });
});
