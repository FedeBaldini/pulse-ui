import { GradientSegment, Section, Title } from "@fbaldini/pulse-ui";

export function GradientSegmentsSection() {
  return (
    <Section>
      <Title as="h3">Gradient segments</Title>
      <Title as="h5">Default</Title>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4">
        <GradientSegment style="primary">
          <Title as="h6" className="uppercase">
            Lorem ipsum dolor sit amet
          </Title>
        </GradientSegment>
        <GradientSegment style="secondary">
          <Title as="h6" className="uppercase">
            Lorem ipsum dolor sit amet
          </Title>
        </GradientSegment>
        <GradientSegment style="tertiary">
          <Title as="h6" className="uppercase">
            Lorem ipsum dolor sit amet
          </Title>
        </GradientSegment>
        <GradientSegment style="error">
          <Title as="h6" className="uppercase">
            Lorem ipsum dolor sit amet
          </Title>
        </GradientSegment>
        <GradientSegment style="warning">
          <Title as="h6" className="uppercase">
            Lorem ipsum dolor sit amet
          </Title>
        </GradientSegment>
        <GradientSegment style="success">
          <Title as="h6" className="uppercase">
            Lorem ipsum dolor sit amet
          </Title>
        </GradientSegment>
        <GradientSegment style="neutral">
          <Title as="h6" className="uppercase">
            Lorem ipsum dolor sit amet
          </Title>
        </GradientSegment>
      </div>
    </Section>
  );
}
