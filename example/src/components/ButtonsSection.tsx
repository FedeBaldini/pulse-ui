import { Button, Title } from "@fbaldini/pulse-ui";

export function ButtonsSection() {
  return (
    <div className="my-8">
      <Title as="h3">Buttons</Title>
      <Title as="h5" className="my-2">
        Default
      </Title>
      <div className="grid grid-cols-2 md:flex items-center gap-2">
        <Button style="primary" onClick={console.log}>
          Primary
        </Button>
        <Button style="secondary" onClick={console.log}>
          Secondary
        </Button>
        <Button style="tertiary" onClick={console.log}>
          Tertiary
        </Button>
        <Button style="error" onClick={console.log}>
          Error
        </Button>
        <Button style="warning" onClick={console.log}>
          Warning
        </Button>
        <Button style="success" onClick={console.log}>
          Success
        </Button>
        <Button style="neutral" onClick={console.log}>
          Neutral
        </Button>
      </div>
      <Title as="h5" className="my-2">
        Outlined
      </Title>
      <div className="grid grid-cols-2 md:flex items-center gap-2">
        <Button outlined style="primary" onClick={console.log}>
          Primary
        </Button>
        <Button outlined style="secondary" onClick={console.log}>
          Secondary
        </Button>
        <Button outlined style="tertiary" onClick={console.log}>
          Tertiary
        </Button>
        <Button outlined style="error" onClick={console.log}>
          Error
        </Button>
        <Button outlined style="warning" onClick={console.log}>
          Warning
        </Button>
        <Button outlined style="success" onClick={console.log}>
          Success
        </Button>
        <Button outlined style="neutral" onClick={console.log}>
          Neutral
        </Button>
      </div>
      <Title as="h5" className="my-2">
        Small
      </Title>
      <div className="grid grid-cols-2 md:flex items-center gap-2">
        <Button small style="primary" onClick={console.log}>
          Primary
        </Button>
        <Button small style="secondary" onClick={console.log}>
          Secondary
        </Button>
        <Button small style="tertiary" onClick={console.log}>
          Tertiary
        </Button>
        <Button small style="error" onClick={console.log}>
          Error
        </Button>
        <Button small style="warning" onClick={console.log}>
          Warning
        </Button>
        <Button small style="success" onClick={console.log}>
          Success
        </Button>
        <Button small style="neutral" onClick={console.log}>
          Neutral
        </Button>
      </div>
      <Title as="h5" className="my-2">
        Combined
      </Title>
      <div className="grid grid-cols-2 md:flex items-center gap-2">
        <Button small outlined style="primary" onClick={console.log}>
          Primary
        </Button>
        <Button small outlined style="secondary" onClick={console.log}>
          Secondary
        </Button>
        <Button small outlined style="tertiary" onClick={console.log}>
          Tertiary
        </Button>
        <Button small outlined style="error" onClick={console.log}>
          Error
        </Button>
        <Button small outlined style="warning" onClick={console.log}>
          Warning
        </Button>
        <Button small outlined style="success" onClick={console.log}>
          Success
        </Button>
        <Button small outlined style="neutral" onClick={console.log}>
          Neutral
        </Button>
      </div>
    </div>
  );
}
