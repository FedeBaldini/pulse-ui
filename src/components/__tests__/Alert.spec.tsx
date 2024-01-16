import { render, screen } from "@testing-library/react";

import { Alert } from "../Alert";

describe("components/Alert", () => {
  it.each([
    ["error", { error: true }],
    ["warning", { warning: true }],
    ["success", { success: true }]
  ])("renders as %s", (style, props) => {
    render(<Alert {...props} content="Alert" />);
    expect(screen.getByText("Alert")).toHaveClass(
      `!border-${style} !bg-${style}-extra-light !text-${style}-dark`
    );
  });
});
