import { Container, StyleProvider } from "@fbaldini/pulse-ui";
import "@fbaldini/pulse-ui/global.css";
import type { AppProps } from "next/app";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const ComponentNode = Component as any;
  return (
    <StyleProvider>
      <Container>
        <ComponentNode {...pageProps} />
      </Container>
    </StyleProvider>
  );
}
