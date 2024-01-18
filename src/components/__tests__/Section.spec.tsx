import { render, screen } from "@testing-library/react";

import { Section } from "../Section";

describe("components/Section", () => {
  it("allows to provide additional classname", () => {
    render(<Section className="additional-class">Section</Section>);
    expect(screen.getByText("Section")).toHaveClass("additional-class");
  });

  it("renders as padded by default", () => {
    render(<Section children="Section" />);
    expect(screen.getByText("Section")).toHaveClass("p-4 md:p-6");
  });

  it("renders as padded when explicited", () => {
    const { unmount } = render(<Section children="Section" padded />);
    expect(screen.getByText("Section")).toHaveClass("p-4 md:p-6");

    unmount();
    render(<Section children="Section" padded={false} />);

    expect(screen.getByText("Section")).not.toHaveClass("p-4 md:p-6");
  });
});
