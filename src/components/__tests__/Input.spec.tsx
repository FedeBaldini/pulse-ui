import { render, screen } from "@testing-library/react";

import { Input } from "../Input";

describe("components/Input", () => {
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
});
