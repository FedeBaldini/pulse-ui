import { ProgressBar, Section, Title } from "@fbaldini/pulse-ui";

export function ProgressBarsSection() {
  return (
    <Section>
      <Title as="h3">Progress bars</Title>
      <Title as="h5" className="my-2">
        Default
      </Title>
      <div className="flex flex-col gap-2 md:w-1/2">
        <ProgressBar size="small" percentage={68} />
        <ProgressBar size="medium" percentage={68} />
        <ProgressBar size="large" percentage={68} />
        <ProgressBar style="primary" percentage={68} />
        <ProgressBar style="secondary" percentage={68} />
        <ProgressBar style="tertiary" percentage={68} />
        <ProgressBar style="error" percentage={68} />
        <ProgressBar style="warning" percentage={68} />
        <ProgressBar style="success" percentage={68} />
        <ProgressBar style="neutral" percentage={68} />
      </div>
    </Section>
  );
}
