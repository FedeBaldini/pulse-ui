import { Button, Modal, Title, useModal } from "@fbaldini/pulse-ui";

import { AlertsSection } from "../components/AlertsSection";
import { AvatarsSection } from "../components/AvatarsSection";
import { ButtonsSection } from "../components/ButtonsSection";
import { ModalsSection } from "../components/ModalsSection";
import { TagsSection } from "../components/TagsSection";
import { TitlesSection } from "../components/TitlesSection";

export default function Home() {
  const { close, isOpen, open } = useModal();

  return (
    <main className="mb-12">
      <Title as="h1">PulseUI Examples</Title>
      <ButtonsSection />
      <TitlesSection />
      <TagsSection />
      <AlertsSection />
      <ModalsSection />
      <AvatarsSection />
    </main>
  );
}
