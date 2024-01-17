import { render, screen } from "@testing-library/react";

import { Loader, LoaderProps } from "../Loader";

describe("components/Loader", () => {
  it("allows to provide additional classname", () => {
    render(<Loader className="additional-class" />);
    expect(screen.getByTestId("Loader")).toHaveClass("additional-class");
  });

  it.each<[LoaderProps["size"], string]>([
    ["small", "h-6 w-6"],
    ["medium", "h-8 w-8"],
    ["large", "h-12 w-12"]
  ])("renders as %s", (size, style) => {
    render(<Loader size={size} />);
    expect(screen.getByRole("img")).toHaveClass(style);
  });

  it.each<LoaderProps["style"]>([
    "primary",
    "secondary",
    "tertiary",
    "error",
    "warning",
    "success",
    "neutral"
  ])("renders as %s", (style) => {
    render(<Loader style={style} />);
    expect(screen.getByRole("img")).toHaveClass(`fill-${style}`);
  });

  it.each<LoaderProps["align"]>(["left", "center", "right"])(
    "renders as %s aligned",
    (align) => {
      render(<Loader align={align} />);
      expect(screen.getByTestId("Loader")).toHaveClass(`text-${align}`);
    }
  );

  it("renders inline", () => {
    const { unmount } = render(<Loader />);

    expect(screen.getByTestId("Loader")).toHaveClass(
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    );
    expect(screen.getByRole("img")).not.toHaveClass("inline");

    unmount();
    render(<Loader inline />);

    expect(screen.getByTestId("Loader")).not.toHaveClass(
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    );
    expect(screen.getByRole("img")).toHaveClass("inline");
  });
});
