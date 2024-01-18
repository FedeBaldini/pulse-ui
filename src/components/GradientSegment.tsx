import classNames from "classnames";

import {
  HtmlElementTag,
  ThemeStyle,
  WithChildren,
  WithOptionalClassname
} from "../types";

export interface GradientSegmentProps
  extends WithChildren,
    WithOptionalClassname {
  as?: HtmlElementTag;
  style?: ThemeStyle;
}

export function GradientSegment({
  as: As = "div",
  style,
  children,
  className
}: GradientSegmentProps) {
  return (
    <As
      className={classNames(
        "bg-gradient-to-r rounded-default p-4 md:p-6 text-white",
        {
          "from-primary via-primary-light to-primary-extra-light":
            style === "primary",
          "from-secondary via-secondary-light to-secondary-extra-light":
            style === "secondary",
          "from-tertiary via-tertiary-light to-tertiary-extra-light":
            style === "tertiary",
          "from-error via-error-light to-error-extra-light": style === "error",
          "from-warning via-warning-light to-warning-extra-light":
            style === "warning",
          "from-success via-success-light to-success-extra-light":
            style === "success",
          "from-neutral via-neutral-light to-neutral-extra-light":
            style === "neutral"
        },
        className
      )}
    >
      {children}
    </As>
  );
}
