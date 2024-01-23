import { render, screen, within } from "@testing-library/react";

import { Button } from "../Button";
import { Table } from "../Table";

describe("components/Select", () => {
  it("renders the given headers", () => {
    render(
      <Table
        headers={[
          { property: "first", text: "First" },
          { property: "second", text: "Second" },
          { property: "actions", text: <Button children="Action button" /> }
        ]}
      >
        <Table.Row>
          <Table.Cell property="first">Cell 1</Table.Cell>
          <Table.Cell property="second">Cell 2</Table.Cell>
          <Table.Cell property="actions" />
        </Table.Row>
      </Table>
    );

    const header = screen.getByRole("header");
    expect(within(header).getByText("First")).toBeInTheDocument();
    expect(within(header).getByText("Second")).toBeInTheDocument();
    expect(
      within(header).getByRole("button", { name: /Action button/ })
    ).toBeInTheDocument();
  });

  it("renders the given cells", () => {
    render(
      <Table
        headers={[
          { property: "first", text: "First" },
          { property: "second", text: "Second" },
          { property: "actions", text: <Button children="Action button" /> }
        ]}
      >
        <Table.Row>
          <Table.Cell property="first">Cell 1</Table.Cell>
          <Table.Cell property="second">Cell 2</Table.Cell>
          <Table.Cell property="actions" />
        </Table.Row>
        <Table.Row>
          <Table.Cell property="first">Cell 1</Table.Cell>
          <Table.Cell property="second">Cell 2</Table.Cell>
          <Table.Cell property="actions" />
        </Table.Row>
      </Table>
    );

    const firstCells = screen.getAllByTestId("Table.Cell.first");
    expect(firstCells).toHaveLength(5); // One header, 2 mobile cells, 2 desktop cells
    const secondCells = screen.getAllByTestId("Table.Cell.second");
    expect(secondCells).toHaveLength(5); // One header, 2 mobile cells, 2 desktop cells
    const actionsCells = screen.getAllByTestId("Table.Cell.actions");
    expect(actionsCells).toHaveLength(5); // One header, 2 mobile cells, 2 desktop cells
  });
});
