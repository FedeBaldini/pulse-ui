import { render, screen } from "@testing-library/react";

import { Alert } from "../Alert";

describe("components/Alert", () => {
  it("allows to provide additional classname", () => {
    render(<Alert content="Alert" className="additional-class" />);
    expect(screen.getByText("Alert")).toHaveClass("additional-class");
  });
});
