import { Section, Title } from "@fbaldini/pulse-ui";

export function TitlesSection() {
  return (
    <Section>
      <Title as="h3">Titles</Title>
      <Title as="h1" className="my-2">
        Title as h1
      </Title>
      <Title as="h2" className="my-2">
        Title as h2
      </Title>
      <Title as="h3" className="my-2">
        Title as h3
      </Title>
      <Title as="h4" className="my-2">
        Title as h4
      </Title>
      <Title as="h5" className="my-2">
        Title as h5
      </Title>
      <Title as="h6" className="my-2">
        Title as h6
      </Title>
    </Section>
  );
}
