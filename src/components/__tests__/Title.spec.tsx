import { render, screen } from "@testing-library/react";

import { Title, TitleProps } from "../Title";

describe("components/Title", () => {
  it("allows to provide additional classname", () => {
    render(<Title className="additional-class">Title</Title>);
    expect(screen.getByText("Title")).toHaveClass("additional-class");
  });

  it.each<[TitleProps["as"], string]>([
    ["h1", "text-4xl"],
    ["h2", "text-3xl"],
    ["h3", "text-2xl"],
    ["h4", "text-xl"],
    ["h5", "text-lg"],
    ["h6", "text-md"]
  ])("renders as %s", (as, className) => {
    render(<Title as={as}>Title</Title>);
    expect(screen.getByText("Title")).toHaveClass(className);
  });
});
