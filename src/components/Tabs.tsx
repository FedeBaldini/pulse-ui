import classNames from "classnames";

import { useChildren } from "../hooks";
import { WithChildren, WithOptionalClassname } from "../types";

export interface TabsProps extends WithChildren, WithOptionalClassname {}

export function Tabs({ children, className }: TabsProps) {
  const { getChildrenOfType } = useChildren(children);
  const items = getChildrenOfType(Tabs.Item);
  return (
    <div
      className={classNames(
        "text-sm font-medium text-center border-b border-neutral-extra-light",
        className
      )}
    >
      <ul className="flex flex-wrap">{items}</ul>
    </div>
  );
}

function TabsItem({
  children,
  disabled,
  active
}: WithChildren & { disabled?: boolean; active?: boolean }) {
  return (
    <li
      className={classNames(
        "inline-block p-2 md:p-4 border-b-2 border-transparent",
        {
          "hover:text-neutral hover:border-neutral-light cursor-pointer":
            !disabled,
          "!text-primary border-b-2 !border-primary": active,
          "text-neutral cursor-not-allowed": disabled
        }
      )}
    >
      {children}
    </li>
  );
}

Tabs.Item = TabsItem;
