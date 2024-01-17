import { Button, Modal, Title, useModal } from "@fbaldini/pulse-ui";

export default function Home() {
  const { close, isOpen, open } = useModal();
  console.log({ isOpen });
  return (
    <main>
      <div>
        <Title as="h1">PulseUI Examples</Title>
        <div className="my-8">
          <Title as="h3">Buttons</Title>
          <Title as="h5" className="my-2">
            Default
          </Title>
          <div className="flex items-center gap-2">
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
        </div>
      </div>
      <Button style="primary" onClick={open}>
        Open modal
      </Button>
      <Modal onClose={close} isOpen={false} closeOnOutsideClick>
        <Modal.Header onClose={close}>
          <Title as="h3">Lorem ipsum dolor sit amet</Title>
        </Modal.Header>
        <Modal.Content>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            euismod nulla. Nullam sagittis lectus ut velit blandit iaculis.
            Etiam posuere, nunc ac iaculis fringilla, tellus sem tincidunt
            ipsum, ac mattis lacus velit a tellus.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Donec viverra, odio a bibendum imperdiet, turpis ipsum vestibulum
            ligula, at suscipit diam ipsum id nunc. Integer accumsan, libero id
            mollis imperdiet, metus velit finibus enim, eget suscipit lectus
            nisi vel nunc.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button children="Close" outlined onClick={close} />
        </Modal.Actions>
      </Modal>
    </main>
  );
}
