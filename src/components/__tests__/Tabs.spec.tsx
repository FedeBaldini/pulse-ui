import { render, screen } from "@testing-library/react";

import { Tabs } from "../Tabs";

describe("components/Tabs", () => {
  it("renders the given items", async () => {
    render(
      <Tabs>
        <Tabs.Item>First</Tabs.Item>
        <Tabs.Item>Second</Tabs.Item>
        <Tabs.Item>Third</Tabs.Item>
        <Tabs.Item>Fourth</Tabs.Item>
      </Tabs>
    );

    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
    expect(screen.getByText("Third")).toBeInTheDocument();
    expect(screen.getByText("Fourth")).toBeInTheDocument();
  });

  it("disables the item", async () => {
    render(
      <Tabs>
        <Tabs.Item disabled>Item disabled</Tabs.Item>
        <Tabs.Item>Item</Tabs.Item>
      </Tabs>
    );

    expect(screen.getByText("Item disabled")).toHaveClass(
      "!text-neutral cursor-not-allowed pointer-events-none"
    );
  });

  it("activates the item", async () => {
    render(
      <Tabs>
        <Tabs.Item active>Item active</Tabs.Item>
        <Tabs.Item>Item</Tabs.Item>
      </Tabs>
    );

    expect(screen.getByText("Item active")).toHaveClass(
      "!text-primary border-b-2 !border-primary"
    );
  });
});
