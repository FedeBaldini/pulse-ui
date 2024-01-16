import { render, screen } from "@testing-library/react";

import { Form } from "../forms";

describe("components/forms/Form", () => {
  it("allows to provide additional classname", () => {
    render(<Form children="Form value" className="additional-class" />);
    expect(screen.getByText("Form value")).toHaveClass("additional-class");
  });

  describe("Form.Field", () => {
    it("allows to provide additional classname", () => {
      render(
        <Form.Field
          id="label"
          label="Form label"
          className="additional-class"
          children="Form value"
        />
      );
      expect(screen.getByText("Form value")).toHaveClass("additional-class");
    });

    it("allows to provide additional label classname", () => {
      render(
        <Form.Field
          id="label"
          label="Form label"
          labelClassName="label-additional-class"
          children="Form value"
        />
      );
      expect(screen.getByText("Form label")).toHaveClass(
        "label-additional-class"
      );
    });
  });
});
