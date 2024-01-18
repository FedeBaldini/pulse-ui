import { Section, Tag, Title } from "@fbaldini/pulse-ui";

export function TagsSection() {
  return (
    <Section>
      <Title as="h3">Tags</Title>
      <div className="grid grid-cols-2 md:flex items-center gap-2">
        <Tag style="primary">Primary</Tag>
        <Tag style="secondary">Secondary</Tag>
        <Tag style="tertiary">Tertiary</Tag>
        <Tag style="error">Error</Tag>
        <Tag style="warning">Warning</Tag>
        <Tag style="success">Success</Tag>
        <Tag style="neutral">Neutral</Tag>
      </div>
    </Section>
  );
}
