/**
 * Represents a string literal union of HTML heading element tags available in JSX.
 *
 * @description A valid HTML heading element tag name (h1, h2, h3, h4, h5, h6) that can be used in JSX.
 */
export type HtmlHeadingTag = keyof Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;
