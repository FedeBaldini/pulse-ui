import { Container, StyleProvider, WithChildren } from "@fbaldini/pulse-ui";
import "@fbaldini/pulse-ui/global.css";
import type { AppProps } from "next/app";

import { StyleControllerProvider, useStyleController } from "../contexts";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const ComponentNode = Component as any;

  return (
    <StyleControllerProvider>
      <InnerApplication>
        <ComponentNode {...pageProps} />
      </InnerApplication>
    </StyleControllerProvider>
  );
}

function InnerApplication({ children }: WithChildren) {
  const { theme, isDarkModeActive } = useStyleController();

  return (
    <StyleProvider theme={theme}>
      <div className={isDarkModeActive ? "dark" : undefined}>
        <Container className="pt-8 md:pt-12">{children}</Container>
      </div>
    </StyleProvider>
  );
}
