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
        "flex py-2 rounded-generic",
        {
          "px-4 border border-neutral-light bg-neutral-extra-light dark:text-dark-primary":
            withBackground
        },
        className
      )}
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-2">
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
        "flex items-center ml-1 text-sm font-medium md:ml-2",
        className
      )}
    >
      {children}
    </div>
  );
}

Breadcrumb.Item = BreadcrumbItem;
