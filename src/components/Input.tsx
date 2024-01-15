import { HTMLProps } from "react";

import classNames from "classnames";

import { WithOptionalClassname } from "../types";

export interface InputProps
  extends HTMLProps<HTMLInputElement>,
    WithOptionalClassname {
  small?: boolean;
}

export function Input({ className, small, ...props }: InputProps) {
  return (
    <input
      className={classNames(
        "w-full rounded-lg px-4 py-2 border border-solid border-gray-200",
        "hover:border-primary hover:outline hover:outline-2 hover:outline-primary-extra-light",
        "active:border-tertiary active:outline active:outline-2 active:outline-tertiary-extra-light",
        "focus:border-tertiary focus:outline focus:outline-2 focus:outline-tertiary-extra-light",
        { "text-sm px-2": small },
        className
      )}
      {...props}
    />
  );
}
