import { useState } from "react";

import { Button, Menu, Section, Title } from "@fbaldini/pulse-ui";

export function MenuSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Section>
      <Title as="h3">Menu</Title>
      <Button style="primary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </Button>
      <Menu isOpen={isOpen}>
        <Menu.Item>First item</Menu.Item>
        <Menu.Item>Second item</Menu.Item>
        <Menu.Item>Third item</Menu.Item>
        <Menu.Item disabled>Fourth item disabled</Menu.Item>
        <Menu.Item>Fifth item</Menu.Item>
      </Menu>
    </Section>
  );
}
