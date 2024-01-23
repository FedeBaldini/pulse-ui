import { HTMLProps } from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Select } from "../forms";

describe("components/forms/Select", () => {
  it("allows to provide additional classname", () => {
    render(
      <Select
        placeholder="Select a value"
        className="additional-class"
        options={[]}
      />
    );
    expect(screen.getByPlaceholderText("Select a value")).toHaveClass(
      "additional-class"
    );
  });

  it("renders as small", () => {
    render(<Select small placeholder="Select a value" options={[]} />);
    expect(screen.getByPlaceholderText("Select a value")).toHaveClass(
      "text-sm px-2"
    );
  });

  it.each([
    ["error", { error: true }],
    ["warning", { warning: true }],
    ["success", { success: true }]
  ])("renders as %s", (style, props) => {
    render(<Select placeholder="Select a value" {...props} options={[]} />);
    expect(screen.getByPlaceholderText("Select a value")).toHaveClass(
      `border-${style} outline outline-2 outline-${style}-extra-light hover:outline-${style}-extra-light active:outline-${style}-extra-light focus:outline-${style}-extra-light hover:border-${style} active:border-${style} focus:border-${style}`
    );
  });

  it("renders the given options", async () => {
    render(
      <Select
        small
        placeholder="Select a value"
        options={[
          { label: "First", value: "first" },
          { label: "Second", value: "second" }
        ]}
      />
    );
    const select = screen.getByPlaceholderText(
      "Select a value"
    ) as unknown as HTMLProps<HTMLSelectElement>;

    await userEvent.selectOptions(select as unknown as Element, "first");
    expect(select.value).toBe("first");

    await userEvent.selectOptions(select as unknown as Element, "second");
    expect(select.value).toBe("second");
  });

  it("renders the empty option", async () => {
    render(
      <Select
        small
        placeholder="Select a value"
        emptyOption={{ label: "Empty", value: "" }}
        options={[
          { label: "First", value: "first" },
          { label: "Second", value: "second" }
        ]}
      />
    );
    const select = screen.getByPlaceholderText(
      "Select a value"
    ) as unknown as HTMLProps<HTMLSelectElement>;

    await userEvent.selectOptions(select as unknown as Element, "");
    expect(select.value).toBe("");
  });
});
