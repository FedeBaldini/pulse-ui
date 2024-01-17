import { Button, Modal, Title, useModal } from "@fbaldini/pulse-ui";

export default function Home() {
  const { close, isOpen, open } = useModal();
  return (
    <main>
      <Button style="primary" small outlined onClick={open}>
        Open modal
      </Button>
      <Modal isOpen={isOpen} closeOnOutsideClick>
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
