import { render, screen } from "@testing-library/react";

import { ProgressBar, ProgressBarProps } from "../ProgressBar";

describe("components/ProgressBar", () => {
  it("allows to provide additional classname", () => {
    render(<ProgressBar className="additional-class" percentage={50} />);
    expect(screen.getByRole("progressbar")).toHaveClass("additional-class");
  });

  it.each<ProgressBarProps["style"]>([
    "primary",
    "secondary",
    "tertiary",
    "error",
    "warning",
    "success",
    "neutral"
  ])("renders as %s", (style) => {
    render(<ProgressBar style={style} percentage={50} />);
    expect(screen.getByTestId("Percentage")).toHaveClass(`bg-${style}`);
  });

  it.each<[ProgressBarProps["size"], string]>([
    ["small", "h-2"],
    ["medium", "h-4"],
    ["large", "h-6"]
  ])("renders as %s", (size, style) => {
    render(<ProgressBar size={size} percentage={50} />);
    expect(screen.getByRole("progressbar")).toHaveClass(style);
  });
});
