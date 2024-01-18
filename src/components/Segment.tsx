import classNames from "classnames";

import { HtmlElementTag, WithChildren, WithOptionalClassname } from "../types";

interface SegmentProps extends WithChildren, WithOptionalClassname {
  as?: HtmlElementTag;
}

export function Segment({ as: As = "div", children, className }: SegmentProps) {
  return (
    <As
      className={classNames(
        "bg-neutral-extra-light rounded-default p-4 md:p-6",
        className
      )}
    >
      {children}
    </As>
  );
}
