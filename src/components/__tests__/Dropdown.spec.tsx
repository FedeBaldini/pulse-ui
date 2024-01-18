import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Dropdown } from "../Dropdown";

describe("components/Dropdown", () => {
  it("renders the given items", async () => {
    render(
      <Dropdown label="Dropdown">
        <Dropdown.Item>First</Dropdown.Item>
        <Dropdown.Item>Second</Dropdown.Item>
        <Dropdown.Item disabled>Third disabled</Dropdown.Item>
        <Dropdown.Item>Fourth</Dropdown.Item>
      </Dropdown>
    );

    expect(screen.queryByText("First")).not.toBeInTheDocument();
    expect(screen.queryByText("Second")).not.toBeInTheDocument();
    expect(screen.queryByText("Third disabled")).not.toBeInTheDocument();
    expect(screen.queryByText("Fourth")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /Dropdown/ }));

    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
    expect(screen.getByText("Third disabled")).toBeInTheDocument();
    expect(screen.getByText("Fourth")).toBeInTheDocument();
  });

  it("disables the item", async () => {
    render(
      <Dropdown label="Dropdown">
        <Dropdown.Item>First</Dropdown.Item>
        <Dropdown.Item>Second</Dropdown.Item>
        <Dropdown.Item disabled>Third disabled</Dropdown.Item>
        <Dropdown.Item>Fourth</Dropdown.Item>
      </Dropdown>
    );

    await userEvent.click(screen.getByRole("button", { name: /Dropdown/ }));

    expect(screen.getByText("Third disabled")).toHaveClass(
      "pointer-events-none"
    );
  });
});
