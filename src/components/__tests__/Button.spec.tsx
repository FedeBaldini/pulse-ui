import { render, screen } from "@testing-library/react";

import { Button } from "../Button";

describe("components/Button", () => {
  it("renders as expected", () => {
    render(<Button />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
