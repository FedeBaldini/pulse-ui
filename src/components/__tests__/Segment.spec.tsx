import { render, screen } from "@testing-library/react";

import { Segment } from "../Segment";

describe("components/Segment", () => {
  it("allows to provide additional classname", () => {
    render(<Segment className="additional-class">Segment</Segment>);
    expect(screen.getByText("Segment")).toHaveClass("additional-class");
  });
});
