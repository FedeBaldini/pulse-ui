import { Button, Section, Title, Toast, useToast } from "@fbaldini/pulse-ui";

export function ToastsSection() {
  return (
    <Section>
      <Title as="h3">Toasts</Title>
      <Title as="h5">Default</Title>
      <div className="grid md:grid-cols-4 gap-2">
        <Toast children="A nice toast" onClose={console.log} />
        <Toast children="A nice toast" onClose={console.log} error />
        <Toast children="A nice toast" onClose={console.log} warning />
        <Toast children="A nice toast" onClose={console.log} success />
      </div>
      <Title as="h5">With useToast</Title>
      <WithUseToast />
    </Section>
  );
}

function WithUseToast() {
  const toast = useToast();
  return (
    <div className="grid md:grid-cols-4 gap-2">
      <Button style="primary" onClick={() => toast("A nice toast")}>
        Open default toast
      </Button>
      <Button style="primary" onClick={() => toast("A nice toast", "error")}>
        Open error toast
      </Button>
      <Button style="primary" onClick={() => toast("A nice toast", "warning")}>
        Open warning toast
      </Button>
      <Button style="primary" onClick={() => toast("A nice toast", "success")}>
        Open success toast
      </Button>
    </div>
  );
}
