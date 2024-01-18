import classNames from "classnames";

import { WithChildren, WithOptionalClassname } from "../types";

export interface BreadcrumbProps extends WithChildren, WithOptionalClassname {
  withBackground?: boolean;
}

export function Breadcrumb({
  children,
  className,
  withBackground
}: BreadcrumbProps) {
  return (
    <nav
      className={classNames(
        "flex px-5 py-3 rounded-default",
        {
          "border border-neutral-light bg-neutral-extra-light": withBackground
        },
        className
      )}
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {Array.isArray(children)
          ? children.map((child, index) => (
              <li key={index} className="inline-flex items-center">
                {child}
              </li>
            ))
          : null}
      </ol>
    </nav>
  );
}

function BreadcrumbItem({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <div
      className={classNames(
        "flex items-center ms-1 text-sm font-medium md:ms-2",
        className
      )}
    >
      {children}
    </div>
  );
}

Breadcrumb.Item = BreadcrumbItem;
