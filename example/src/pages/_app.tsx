import { Dispatch, SetStateAction, useCallback, useState } from "react";

import { Container, StyleProvider, Switch } from "@fbaldini/pulse-ui";
import "@fbaldini/pulse-ui/global.css";
import type { AppProps } from "next/app";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkModeActive, setDarkModeActive] = useState(false);
  const ComponentNode = Component as any;

  return (
    <StyleProvider>
      <div className={isDarkModeActive ? "dark" : undefined}>
        <Container className="pt-8 md:pt-12">
          <SwithMode
            isDarkModeActive={isDarkModeActive}
            setDarkModeActive={setDarkModeActive}
          />
          <ComponentNode {...pageProps} />
        </Container>
      </div>
    </StyleProvider>
  );
}

interface SwitchModeProps {
  isDarkModeActive: boolean;
  setDarkModeActive: Dispatch<SetStateAction<boolean>>;
}

function SwithMode({ isDarkModeActive, setDarkModeActive }: SwitchModeProps) {
  const handleChange = useCallback(() => {
    setDarkModeActive(!isDarkModeActive);
  }, [isDarkModeActive]);

  return (
    <div className="mb-4 md:mb-6">
      <Switch
        label={`Dark mode ${isDarkModeActive ? "ON" : "OFF"}`}
        onChange={handleChange}
      />
    </div>
  );
}
