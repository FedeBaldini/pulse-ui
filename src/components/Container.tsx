import classNames from "classnames";

import { WithChildren, WithOptionalClassname } from "../types";

export function Container({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <div className="h-full w-full dark:bg-slate-800 dark:text-neutral-extra-light">
      <div className={classNames("container mx-auto px-4 md:p-0", className)}>
        {children}
      </div>
    </div>
  );
}
