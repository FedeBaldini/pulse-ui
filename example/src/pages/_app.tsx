import { useState } from "react";

import { Container, Section, StyleProvider } from "@fbaldini/pulse-ui";
import "@fbaldini/pulse-ui/global.css";
import type { AppProps } from "next/app";

import { ColorsController } from "../components/ColorsController";
import { ModeSwitcher } from "../components/ModeSwitcher";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkModeActive, setDarkModeActive] = useState(false);
  const ComponentNode = Component as any;

  const [theme, setTheme] = useState<any>(undefined);

  return (
    <StyleProvider theme={theme}>
      <div className={isDarkModeActive ? "dark" : undefined}>
        <Container className="pt-8 md:pt-12">
          <ModeSwitcher
            isDarkModeActive={isDarkModeActive}
            setDarkModeActive={setDarkModeActive}
          />
          <Section>
            <ColorsController onThemeChange={setTheme} />
          </Section>
          <ComponentNode {...pageProps} />
        </Container>
      </div>
    </StyleProvider>
  );
}
