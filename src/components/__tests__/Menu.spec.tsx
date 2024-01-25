import { render, screen } from "@testing-library/react";

import { Menu } from "../Menu";

describe("components/Menu", () => {
  it("doesn't render when not isOpen", () => {
    render(
      <Menu isOpen={false}>
        <Menu.Item children="Content" />
      </Menu>
    );
    expect(screen.getByRole("menu")).toHaveClass("max-h-0");
  });

  it("render when isOpen", () => {
    render(
      <Menu isOpen={true}>
        <Menu.Item children="Content" />
      </Menu>
    );
    expect(screen.getByRole("menu")).toHaveClass("max-h-64");
  });

  it("renders the given items", () => {
    render(
      <Menu>
        <Menu.Item children="First item" />
        <Menu.Item children="Second item" />
      </Menu>
    );
    expect(screen.getByText("First item")).toBeInTheDocument();
    expect(screen.getByText("Second item")).toBeInTheDocument();
  });
});
