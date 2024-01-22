import { Button, Section, Table, Title } from "@fbaldini/pulse-ui";

export function TablesSection() {
  return (
    <Section>
      <Title as="h3">Tables</Title>
      <div className="mt-2">
        <Table
          headers={[
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
          ]}
        >
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
      </div>
    </Section>
  );
}
