import { Alert, Section, Title } from "@fbaldini/pulse-ui";

export function AlertsSection() {
  return (
    <Section>
      <Title as="h3">Alerts</Title>
      <Title as="h5">Default</Title>
      <div className="grid md:grid-cols-2 items-center gap-2">
        <Alert
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            euismod nulla"
        />
        <Alert
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            euismod nulla"
          error
        />
        <Alert
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            euismod nulla"
          warning
        />
        <Alert
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            euismod nulla"
          success
        />
      </div>
      <Title as="h5">With title</Title>
      <div className="grid md:grid-cols-2 items-center gap-2">
        <Alert
          title="Neutral"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            euismod nulla"
        />
        <Alert
          title="Error"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            euismod nulla"
          error
        />
        <Alert
          title="Warning"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            euismod nulla"
          warning
        />
        <Alert
          title="Success"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            euismod nulla"
          success
        />
      </div>
    </Section>
  );
}
