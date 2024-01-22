import { Title } from "@fbaldini/pulse-ui";
import Link from "next/link";

import { ModeSwitcher } from "../components/ModeSwitcher";
import { ThemeController } from "../components/ThemeController";

export default function Home() {
  return (
    <main className="mb-12">
      <Title as="h1">PulseUI Configurator</Title>
      <ModeSwitcher />
      <Link className="hover:underline text-neutral text-lg" href="/">
        Go back
      </Link>
      <ThemeController />
    </main>
  );
}
