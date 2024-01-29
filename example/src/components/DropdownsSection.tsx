import { Dropdown, Section, Title } from "@fbaldini/pulse-ui";

export function DropdownsSection() {
  return (
    <Section>
      <Title as="h3">Dropdowns</Title>
      <Title as="h5" className="my-2">
        Default
      </Title>
      <div className="grid grid-cols-2 md:flex items-center gap-2">
        <Dropdown style="primary" label="Primary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown style="secondary" label="Secondary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown style="tertiary" label="Tertiary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown style="error" label="Error">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown style="warning" label="Warning">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown style="success" label="Success">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown style="neutral" label="Neutral">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
      </div>
      <Title as="h5">Outlined</Title>
      <div className="grid grid-cols-2 md:flex items-center gap-2">
        <Dropdown outlined style="primary" label="Primary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown outlined style="secondary" label="Secondary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown outlined style="tertiary" label="Tertiary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown outlined style="error" label="Error">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown outlined style="warning" label="Warning">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown outlined style="success" label="Success">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown outlined style="neutral" label="Neutral">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
      </div>
      <Title as="h5">Small</Title>
      <div className="grid grid-cols-2 md:flex items-center gap-2">
        <Dropdown small style="primary" label="Primary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small style="secondary" label="Secondary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small style="tertiary" label="Tertiary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small style="error" label="Error">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small style="warning" label="Warning">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small style="success" label="Success">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small style="neutral" label="Neutral">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
      </div>
      <Title as="h5">Combined</Title>
      <div className="grid grid-cols-2 md:flex items-center gap-2">
        <Dropdown small outlined style="primary" label="Primary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small outlined style="secondary" label="Secondary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small outlined style="tertiary" label="Tertiary">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small outlined style="error" label="Error">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small outlined style="warning" label="Warning">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small outlined style="success" label="Success">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
        <Dropdown small outlined style="neutral" label="Neutral">
          <Dropdown.Item>First</Dropdown.Item>
          <Dropdown.Item>Second</Dropdown.Item>
          <Dropdown.Item disabled>Third disabled</Dropdown.Item>
          <Dropdown.Item>Fourth</Dropdown.Item>
        </Dropdown>
      </div>
    </Section>
  );
}
