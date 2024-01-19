import { useState } from "react";

import { Section, Tabs, Title } from "@fbaldini/pulse-ui";

export function TabsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Section>
      <Title as="h3">Tabs</Title>
      <Tabs>
        <Tabs.Item onClick={() => setActiveIndex(0)} active={activeIndex === 0}>
          First
        </Tabs.Item>
        <Tabs.Item
          onClick={() => setActiveIndex(1)}
          active={activeIndex === 1}
          disabled
        >
          Second
        </Tabs.Item>
        <Tabs.Item onClick={() => setActiveIndex(2)} active={activeIndex === 2}>
          Third
        </Tabs.Item>
        <Tabs.Item onClick={() => setActiveIndex(3)} active={activeIndex === 3}>
          Fourth
        </Tabs.Item>
      </Tabs>
      {activeIndex === 0 ? (
        <div className="p-2 md:p-4">First section</div>
      ) : null}
      {activeIndex === 1 ? (
        <div className="p-2 md:p-4">Second section</div>
      ) : null}
      {activeIndex === 2 ? (
        <div className="p-2 md:p-4">Third section</div>
      ) : null}
      {activeIndex === 3 ? (
        <div className="p-2 md:p-4">Fourth section</div>
      ) : null}
    </Section>
  );
}
