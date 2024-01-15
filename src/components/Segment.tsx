import classNames from "classnames";

import { WithChildren, WithOptionalClassname } from "../types";

interface SegmentProps extends WithChildren, WithOptionalClassname {
  as?: keyof JSX.IntrinsicElements;
}

export function Segment({ as: As = "div", children, className }: SegmentProps) {
  return (
    <As
      className={classNames(
        "bg-neutral-extra-light rounded-lg p-4 md:p-6",
        className
      )}
    >
      {children}
    </As>
  );
}
