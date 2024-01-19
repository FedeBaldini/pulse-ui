import { useState } from "react";

import { Container, StyleProvider } from "@fbaldini/pulse-ui";
import "@fbaldini/pulse-ui/global.css";
import type { AppProps } from "next/app";

import { ModeSwitcher } from "../components/ModeSwitcher";
import { ThemeController } from "../components/ThemeController";
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
          <ThemeController onThemeChange={setTheme} />
          <ComponentNode {...pageProps} />
        </Container>
      </div>
    </StyleProvider>
  );
}
