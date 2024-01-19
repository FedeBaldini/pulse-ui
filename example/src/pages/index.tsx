import { Title } from "@fbaldini/pulse-ui";

import { AlertsSection } from "../components/AlertsSection";
import { AvatarsSection } from "../components/AvatarsSection";
import { BreadcrumbsSection } from "../components/BreadcrumbsSection";
import { ButtonsSection } from "../components/ButtonsSection";
import { ChipsSection } from "../components/ChipsSection";
import { CommentsSection } from "../components/CommentsSection";
import { FormsSection } from "../components/FormsSection";
import { GradientSegmentsSection } from "../components/GradientSegmentsSection";
import { LoadersSection } from "../components/LoadersSection";
import { ModalsSection } from "../components/ModalsSection";
import { ProgressBarsSection } from "../components/ProgressBarsSection";
import { SegmentsSection } from "../components/SegmentsSection";
import { TabsSection } from "../components/TabsSection";
import { TitlesSection } from "../components/TitlesSection";

export default function Home() {
  return (
    <main className="mb-12">
      <Title as="h1">PulseUI Examples</Title>
      <ButtonsSection />
      <FormsSection />
      <ProgressBarsSection />
      <TitlesSection />
      <ChipsSection />
      <AlertsSection />
      <ModalsSection />
      <TabsSection />
      <AvatarsSection />
      <CommentsSection />
      <LoadersSection />
      <SegmentsSection />
      <GradientSegmentsSection />
      <BreadcrumbsSection />
    </main>
  );
}
