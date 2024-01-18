import classNames from "classnames";

import { HtmlElementTag, WithChildren, WithOptionalClassname } from "../types";

export interface SectionProps extends WithChildren, WithOptionalClassname {
  as?: HtmlElementTag;
  id?: string;
  padded?: boolean;
}

export function Section({
  as: As = "section",
  id,
  children,
  padded,
  className
}: SectionProps) {
  return (
    <As
      className={classNames(
        { "my-4 md:my-6": padded || padded === undefined },
        className
      )}
      id={id}
    >
      {children}
    </As>
  );
}

function SectionGroup({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <div
      className={classNames("flex flex-col gap-4 md:gap-6 xl:gap-8", className)}
    >
      {children}
    </div>
  );
}

Section.Group = SectionGroup;
