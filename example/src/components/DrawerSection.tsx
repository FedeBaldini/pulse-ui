import { useState } from "react";

import { Button, Drawer, Section, Title } from "@fbaldini/pulse-ui";

export function DrawerSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Section>
      <Title as="h3">Drawer</Title>
      <Button style="primary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </Button>
      <Drawer isOpen={isOpen}>
        <Drawer.Header onClose={() => setIsOpen(false)}>
          <Title className="!m-0" as="h4">
            Title
          </Title>
        </Drawer.Header>
        <Drawer.Content>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            euismod nulla. Nullam sagittis lectus ut velit blandit iaculis.
            Etiam posuere, nunc ac iaculis fringilla, tellus sem tincidunt
            ipsum, ac mattis lacus velit a tellus.
          </p>
        </Drawer.Content>
        <Drawer.Footer>
          <Button>Action</Button>
        </Drawer.Footer>
      </Drawer>
    </Section>
  );
}
