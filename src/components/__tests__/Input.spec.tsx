import { render, screen } from "@testing-library/react";

import { Input } from "../forms";

describe("components/forms/Input", () => {
  it("allows to provide additional classname", () => {
    render(<Input placeholder="Insert text" className="additional-class" />);
    expect(screen.getByPlaceholderText("Insert text")).toHaveClass(
      "additional-class"
    );
  });

  it("renders as small", () => {
    render(<Input small placeholder="Insert text" />);
    expect(screen.getByPlaceholderText("Insert text")).toHaveClass(
      "text-sm px-2"
    );
  });

  it.each([
    ["error", { error: true }],
    ["warning", { warning: true }],
    ["success", { success: true }]
  ])("renders as %s", (style, props) => {
    render(<Input placeholder="Insert text" {...props} />);
    expect(screen.getByPlaceholderText("Insert text")).toHaveClass(
      `border-${style} outline outline-2 outline-${style}-extra-light hover:outline-${style}-extra-light active:outline-${style}-extra-light focus:outline-${style}-extra-light hover:border-${style} active:border-${style} focus:border-${style}`
    );
  });
});
