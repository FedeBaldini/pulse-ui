import { useState } from "react";

import { Section, Tabs, Title } from "@fbaldini/pulse-ui";

export function TabsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Section>
      <Title as="h3">Tabs</Title>
      <Tabs>
        <Tabs.Item disabled>
          <span onClick={() => setActiveIndex(0)}>First</span>
        </Tabs.Item>
        <Tabs.Item>
          <span onClick={() => setActiveIndex(1)}>Second</span>
        </Tabs.Item>
        <Tabs.Item active>
          <span onClick={() => setActiveIndex(2)}>Third</span>
        </Tabs.Item>
        <Tabs.Item>
          <span onClick={() => setActiveIndex(3)}>Fourth</span>
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
