import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import { WithOptionalChildren } from "../../types";
import { ToastProvider, useToast } from "../ToastContext";

jest.useFakeTimers();

type Config = WithOptionalChildren & {
  disappearIn?: number;
  text: string;
  type: "error" | "warning" | "success";
};

const TestComponent = ({
  text,
  type
}: Omit<Config, "children" | "disappearIn">) => {
  const showToast = useToast();

  return (
    <div>
      <button onClick={() => showToast(text, type)}>Show Toast</button>
    </div>
  );
};

describe("contexts/ToastContext", () => {
  function renderComponent(config?: Partial<Config>) {
    return render(
      <ToastProvider disappearIn={config?.disappearIn}>
        <TestComponent
          text={config?.text ?? "Show toast"}
          type={config?.type ?? "success"}
        />
        {config?.children}
      </ToastProvider>
    );
  }

  it("renders the children", () => {
    renderComponent({ children: "Children" });
    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it.each<["error" | "warning" | "success", string]>([
    ["error", "ErrorIcon"],
    ["warning", "WarningIcon"],
    ["success", "SuccessIcon"]
  ])("renders a %s toast", async (type, expectedTestId) => {
    renderComponent({ type });

    userEvent.click(screen.getByText("Show Toast"));

    await waitFor(() =>
      expect(screen.getByTestId(expectedTestId)).toBeInTheDocument()
    );
  });

  it("hides the toast after a specified duration", async () => {
    renderComponent({ disappearIn: 500, text: "Show toast" });

    userEvent.click(screen.getByText("Show Toast"));

    await act(async () => {
      jest.advanceTimersByTime(500);
    });

    expect(screen.queryByTestId("SuccessIcon")).toBeNull();
  });

  it("hides the toast when the close button is clicked", async () => {
    renderComponent({ text: "Show toast", type: "success" });

    userEvent.click(screen.getByText("Show Toast"));

    await waitFor(() => {
      expect(screen.getByTestId("SuccessIcon")).toBeInTheDocument();
    });

    userEvent.click(screen.getByTestId("CloseButton"));

    await waitFor(() => {
      expect(screen.queryByTestId("SuccessIcon")).toBeNull();
    });
  });
});
