import {
  Container,
  StyleProvider,
  ToastProvider,
  WithChildren
} from "@fbaldini/pulse-ui";
import "@fbaldini/pulse-ui/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { StyleControllerProvider, useStyleController } from "../contexts";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const ComponentNode = Component as any;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyleControllerProvider>
        <InnerApplication>
          <ComponentNode {...pageProps} />
        </InnerApplication>
      </StyleControllerProvider>
    </>
  );
}

function InnerApplication({ children }: WithChildren) {
  const { theme, isDarkModeActive } = useStyleController();

  return (
    <StyleProvider theme={theme}>
      <ToastProvider>
        <div className={isDarkModeActive ? "dark" : undefined}>
          <Container className="pt-8 md:pt-12">{children}</Container>
        </div>
      </ToastProvider>
    </StyleProvider>
  );
}
