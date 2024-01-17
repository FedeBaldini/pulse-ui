import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Modal } from "../Modal";

describe("components/Modal", () => {
  it("doesn't render when not isOpen", () => {
    render(
      <Modal isOpen={false}>
        <Modal.Content children="Content" />
      </Modal>
    );
    expect(screen.getByTestId("ModalBackground")).toHaveClass("hidden");
  });

  it("closes on outside click", async () => {
    let onClose = jest.fn();
    const { unmount } = render(
      <Modal isOpen={false} onClose={onClose} closeOnOutsideClick>
        <Modal.Content children="Content" />
      </Modal>
    );

    await userEvent.click(screen.getByTestId("ModalBackground"));
    expect(onClose).toHaveBeenCalled();

    onClose = jest.fn();
    unmount();
    render(
      <Modal isOpen={false} onClose={onClose} closeOnOutsideClick={false}>
        <Modal.Content children="Content" />
      </Modal>
    );

    await userEvent.click(screen.getByTestId("ModalBackground"));
    expect(onClose).not.toHaveBeenCalled();
  });

  it("renders the header", async () => {
    const onClose = jest.fn();
    render(
      <Modal>
        <Modal.Header children="Header" onClose={onClose} />
      </Modal>
    );
    expect(screen.getByText("Header")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button"));

    expect(onClose).toHaveBeenCalled();
  });

  it("renders the content", () => {
    render(
      <Modal>
        <Modal.Content children="Content" />
      </Modal>
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders the actions", () => {
    render(
      <Modal>
        <Modal.Actions children="Actions" />
      </Modal>
    );
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });
});
