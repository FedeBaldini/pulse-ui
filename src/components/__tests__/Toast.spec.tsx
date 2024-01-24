import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Toast } from "../Toast";

describe("components/Toast", () => {
  it("allows to provide additional classname", () => {
    render(
      <Toast
        children="Toast"
        className="additional-class"
        onClose={jest.fn()}
      />
    );
    expect(screen.getByRole("alert")).toHaveClass("additional-class");
  });

  it("calls the onClose handler", async () => {
    const onClose = jest.fn();
    render(<Toast children="Toast" onClose={onClose} />);

    await userEvent.click(screen.getByTestId("CloseButton"));

    expect(onClose).toHaveBeenCalled();
  });

  it.each([
    ["error", { error: true }, "ErrorIcon"],
    ["warning", { warning: true }, "WarningIcon"],
    ["success", { success: true }, "SuccessIcon"]
  ])("renders as %s", (_, props, expectedTestId) => {
    render(<Toast children="Toast" onClose={jest.fn()} {...props} />);
    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
