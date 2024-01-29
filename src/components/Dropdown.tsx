import { useCallback, useState } from "react";

import classNames from "classnames";

import { useChildren } from "../hooks";
import { WithChildren } from "../types";
import { Button, ButtonProps } from "./Button";
import { Icon } from "./Icon";

export interface DropdownProps extends Omit<ButtonProps, "onClick"> {
  label: string;
}

export function Dropdown({ label, children, ...props }: DropdownProps) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const { getChildrenOfType } = useChildren(children);
  const items = getChildrenOfType(Dropdown.Item);

  return (
    <div className="relative">
      <Button onClick={handleClick} {...props}>
        <div className="flex items-center">
          {label}
          <Icon name="ArrowDown" className="ml-2" />
        </div>
      </Button>
      {isOpen ? (
        <div className="z-10 bg-white rounded-generic shadow w-44">
          <ul className="py-2 text-sm">{items}</ul>
        </div>
      ) : null}
    </div>
  );
}

function DropdownItem({
  children,
  disabled
}: WithChildren & { disabled?: boolean }) {
  return (
    <li
      className={classNames(
        "block px-4 py-2 hover:bg-neutral-extra-light cursor-pointer",
        {
          "pointer-events-none bg-slate-50": disabled
        }
      )}
    >
      {children}
    </li>
  );
}

Dropdown.Item = DropdownItem;
