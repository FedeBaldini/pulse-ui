import classNames from "classnames";

import { useChildren } from "../hooks";
import { WithChildren, WithOptionalClassname } from "../types";

export interface MenuProps extends WithOptionalClassname, WithChildren {
  isOpen?: boolean;
}

export function Menu({ isOpen, children, className }: MenuProps) {
  const { getChildrenOfType } = useChildren(children);
  const items = getChildrenOfType(Menu.Item);

  return (
    <ul
      role="menu"
      className={classNames(
        "absolute z-10 min-w-44 overflow-auto rounded-generic text-sm",
        {
          "max-h-0": !isOpen,
          "border shadow-lg border-neutral-extra-light max-h-64": isOpen
        },
        className
      )}
      style={{ transition: "max-height 1s ease-in-out" }}
    >
      {items}
    </ul>
  );
}

interface MenuItemProps extends WithChildren, WithOptionalClassname {
  disabled?: boolean;
}

function MenuItem({ children, className, disabled }: MenuItemProps) {
  return (
    <li
      role="menuitem"
      className={classNames(
        "w-full cursor-pointer select-none p-2 md:p-4 text-start hover:bg-neutral-extra-light dark:text-dark-primary",
        "first:rounded-t-generic last:rounded-b-generic",
        {
          "cursor-default pointer-events-none bg-neutral-extra-light opacity-40":
            disabled
        },
        className
      )}
    >
      {children}
    </li>
  );
}

Menu.Item = MenuItem;
