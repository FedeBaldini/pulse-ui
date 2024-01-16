import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { Avatar } from "../Avatar";

describe("components/Avatar", () => {
  it("allows to provide additional classname", () => {
    render(<Avatar className="additional-class" />);
    expect(screen.getByTestId("Avatar")).toHaveClass("additional-class");
  });

  it("renders the initials when there's an error", async () => {
    render(
      <Avatar src="invalid-url" firstName="Federico" lastName="Baldini" />
    );

    fireEvent.error(screen.getByTestId("AvatarImage"));

    await waitFor(() => expect(screen.getByText("FB")).toBeInTheDocument());
    expect(screen.queryByTestId("AvatarImage")).not.toBeInTheDocument();
  });

  it("renders as empty when there's an error and no initials are provided", async () => {
    render(<Avatar src="invalid-url" />);

    fireEvent.error(screen.getByTestId("AvatarImage"));

    await waitFor(() =>
      expect(screen.queryByTestId("AvatarInitials")).not.toBeInTheDocument()
    );
    expect(screen.queryByTestId("AvatarImage")).not.toBeInTheDocument();
  });
});
