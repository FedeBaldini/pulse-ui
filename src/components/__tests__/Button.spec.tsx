import { render, screen } from "@testing-library/react";

import { Button, ButtonProps } from "../Button";

describe("components/Button", () => {
  it("allows to provide additional classname", () => {
    render(<Button children="Click me" className="additional-class" />);
    expect(screen.getByRole("button", { name: "Click me" })).toHaveClass(
      "additional-class"
    );
  });

  it.each<ButtonProps["style"]>(["primary", "secondary", "tertiary"])(
    "renders as %s",
    (style) => {
      render(<Button style={style} children="Click me" />);
      expect(screen.getByRole("button", { name: "Click me" })).toHaveClass(
        `bg-${style} border-${style} hover:outline-${style}-extra-light`
      );
    }
  );

  it.each<ButtonProps["style"]>(["primary", "secondary", "tertiary"])(
    "renders as %s and outlined",
    (style) => {
      render(<Button style={style} children="Click me" outlined />);
      expect(screen.getByRole("button", { name: "Click me" })).toHaveClass(
        `!text-${style} border-${style} hover:outline-${style}-extra-light`
      );
    }
  );

  it("renders as small", () => {
    render(<Button small children="Click me" />);
    expect(screen.getByRole("button", { name: "Click me" })).toHaveClass(
      "text-sm px-2"
    );
  });
});
