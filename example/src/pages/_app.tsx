import type { AppProps } from "next/app";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const ComponentNode = Component as any;
  return <ComponentNode {...pageProps} />;
}
