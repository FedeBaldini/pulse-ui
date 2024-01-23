import { render, screen } from "@testing-library/react";

import { Card } from "../Card";

describe("components/Select", () => {
  it("renders with the content", () => {
    render(
      <Card>
        <Card.Content>Content</Card.Content>
      </Card>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders with the header", () => {
    render(
      <Card>
        <Card.Content>Content</Card.Content>
        <Card.Header>Header</Card.Header>
      </Card>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  it("renders with the image", () => {
    render(
      <Card>
        <Card.Content>Content</Card.Content>
        <Card.Image src="/image.png" />
      </Card>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders with the title", () => {
    render(
      <Card>
        <Card.Content>Content</Card.Content>
        <Card.Title>Title</Card.Title>
      </Card>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("renders with the subtitle", () => {
    render(
      <Card>
        <Card.Content>Content</Card.Content>
        <Card.SubTitle>SubTitle</Card.SubTitle>
      </Card>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("SubTitle")).toBeInTheDocument();
  });

  it("renders with the footer", () => {
    render(
      <Card>
        <Card.Content>Content</Card.Content>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
