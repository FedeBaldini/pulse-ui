import { render, screen } from "@testing-library/react";

import { Container } from "../Container";

describe("components/Container", () => {
  it("allows to provide additional classname", () => {
    render(<Container className="additional-class">Container</Container>);
    expect(screen.getByText("Container")).toHaveClass("additional-class");
  });
});
