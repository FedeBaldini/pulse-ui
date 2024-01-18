import { Chip, Section, Title } from "@fbaldini/pulse-ui";

export function ChipsSection() {
  return (
    <Section>
      <Title as="h3">Chips</Title>
      <div className="grid grid-cols-2 md:flex items-center gap-2">
        <Chip style="primary">Primary</Chip>
        <Chip style="secondary">Secondary</Chip>
        <Chip style="tertiary">Tertiary</Chip>
        <Chip style="error">Error</Chip>
        <Chip style="warning">Warning</Chip>
        <Chip style="success">Success</Chip>
        <Chip style="neutral">Neutral</Chip>
      </div>
    </Section>
  );
}
