import classNames from "classnames";

import { WithChildren, WithOptionalClassname } from "../types";

export function Container({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <div className={classNames("container mx-auto px-4 md:p-0", className)}>
      {children}
    </div>
  );
}
