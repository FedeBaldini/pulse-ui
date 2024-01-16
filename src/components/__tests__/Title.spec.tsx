import { render, screen } from "@testing-library/react";

import { Title } from "../Title";

describe("components/Title", () => {
  it("allows to provide additional classname", () => {
    render(<Title className="additional-class">Title</Title>);
    expect(screen.getByText("Title")).toHaveClass("additional-class");
  });
});
