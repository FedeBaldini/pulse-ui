import { Loader, Title } from "@fbaldini/pulse-ui";

export function LoadersSection() {
  return (
    <div className="my-8">
      <Title as="h3">Loaders</Title>
      <Title as="h5" className="my-2">
        Inline
      </Title>
      <div className="flex items-center gap-4">
        <Loader size="small" inline />
        <Loader size="medium" inline />
        <Loader size="large" inline />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Loader size="small" inline style="primary" />
        <Loader size="small" inline style="secondary" />
        <Loader size="small" inline style="tertiary" />
        <Loader size="small" inline style="error" />
        <Loader size="small" inline style="warning" />
        <Loader size="small" inline style="success" />
        <Loader size="small" inline style="neutral" />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Loader inline style="primary" />
        <Loader inline style="secondary" />
        <Loader inline style="tertiary" />
        <Loader inline style="error" />
        <Loader inline style="warning" />
        <Loader inline style="success" />
        <Loader inline style="neutral" />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Loader size="large" inline style="primary" />
        <Loader size="large" inline style="secondary" />
        <Loader size="large" inline style="tertiary" />
        <Loader size="large" inline style="error" />
        <Loader size="large" inline style="warning" />
        <Loader size="large" inline style="success" />
        <Loader size="large" inline style="neutral" />
      </div>
    </div>
  );
}
