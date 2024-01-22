import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Button } from "../Button";
import { Table, TableProps } from "../Table";

export default {
  title: "components/Table",
  component: Table,
  argTypes: {
    className: hideControl
  }
};

export const Standard: StoryFn<TableProps> = (args) => (
  <Table {...args}>
    <Table.Row>
      <Table.Cell property="firstName">Federico</Table.Cell>
      <Table.Cell property="lastName">Baldini</Table.Cell>
      <Table.Cell property="dateOfBirth">20/01/1996</Table.Cell>
      <Table.Cell property="actions" align="right">
        <div className="flex items-center gap-2">
          <Button small style="warning" outlined>
            Edit
          </Button>
          <Button small style="error" outlined>
            Delete
          </Button>
        </div>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell property="firstName">Mario</Table.Cell>
      <Table.Cell property="lastName">Rossi</Table.Cell>
      <Table.Cell property="dateOfBirth">10/12/1990</Table.Cell>
      <Table.Cell property="actions" align="right">
        <div className="flex items-center gap-2">
          <Button small style="warning" outlined>
            Edit
          </Button>
          <Button small style="error" outlined>
            Delete
          </Button>
        </div>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell property="firstName">Luciano</Table.Cell>
      <Table.Cell property="lastName">Pavarotti</Table.Cell>
      <Table.Cell property="dateOfBirth">10/12/1990</Table.Cell>
      <Table.Cell property="actions" align="right">
        <div className="flex items-center gap-2">
          <Button small style="warning" outlined>
            Edit
          </Button>
          <Button small style="error" outlined>
            Delete
          </Button>
        </div>
      </Table.Cell>
    </Table.Row>
  </Table>
);
Standard.args = {
  headers: [
    {
      property: "firstName",
      text: "First name"
    },
    {
      property: "lastName",
      text: "Last name"
    },
    {
      property: "dateOfBirth",
      text: "Date of birth"
    },
    {
      property: "actions",
      text: (
        <div className="flex items-center lg:justify-end lg:w-full">
          <Button small>Add new</Button>
        </div>
      )
    }
  ]
};
