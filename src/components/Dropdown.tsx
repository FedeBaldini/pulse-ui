import { useCallback, useState } from "react";

import classNames from "classnames";

import { useChildren } from "../hooks";
import { WithChildren } from "../types";
import { Button, ButtonProps } from "./Button";

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
    <>
      <Button onClick={handleClick} {...props}>
        <div className="flex items-center">
          {label}
          <svg
            className="w-2.5 h-2.5 ms-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
      </Button>
      {isOpen ? (
        <div className="z-10 bg-white rounded-default shadow w-44">
          <ul className="py-2 text-sm">{items}</ul>
        </div>
      ) : null}
    </>
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
