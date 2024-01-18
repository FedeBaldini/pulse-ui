import classNames from "classnames";

import { WithChildren, WithOptionalClassname } from "../types";

export interface SectionProps extends WithChildren, WithOptionalClassname {
  as?: keyof JSX.IntrinsicElements;
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
        { "p-4 md:p-6": padded || padded === undefined },
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
