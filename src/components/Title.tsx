import classNames from "classnames";

import { HtmlHeadingTag, WithChildren, WithOptionalClassname } from "../types";

export interface TitleProps extends WithOptionalClassname, WithChildren {
  as?: HtmlHeadingTag;
}
export function Title({ as: As = "h1", children, className }: TitleProps) {
  return (
    <As
      className={classNames(
        "font-semibold my-2 dark:text-neutral-extra-light",
        {
          "text-md": As === "h6",
          "text-lg": As === "h5",
          "text-xl": As === "h4",
          "text-2xl": As === "h3",
          "text-3xl": As === "h2",
          "text-4xl": As === "h1"
        },
        className
      )}
    >
      {children}
    </As>
  );
}
