import { render, screen } from "@testing-library/react";

import { Typography, TypographyProps } from "../Typography";

describe("components/Typography", () => {
  it("allows to provide additional classname", () => {
    render(<Typography className="additional-class">Typography</Typography>);
    expect(screen.getByText("Typography")).toHaveClass("additional-class");
  });

  it.each<[TypographyProps["type"], string]>([
    ["small", "text-xs"],
    ["medium", "text-md"],
    ["large", "text-lg"],
    ["extraLarge", "text-xl"],
    ["boldSmall", "text-xs font-semibold"],
    ["boldMedium", "text-md font-semibold"],
    ["boldLarge", "text-lg font-semibold"],
    ["boldExtraLarge", "text-xl font-semibold"],
    ["leadSmall", "text-xs font-light"],
    ["leadMedium", "text-md font-light"],
    ["leadLarge", "text-lg font-light"],
    ["leadExtraLarge", "text-xl font-light"]
  ])("renders as %s", (type, className) => {
    render(<Typography type={type}>Typography</Typography>);
    expect(screen.getByText("Typography")).toHaveClass(className);
  });
});
