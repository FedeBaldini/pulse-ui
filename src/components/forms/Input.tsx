import { HTMLProps } from "react";

import classNames from "classnames";

import { WithOptionalClassname } from "../../types";

export interface InputProps
  extends HTMLProps<HTMLInputElement>,
    WithOptionalClassname {
  small?: boolean;
  error?: boolean;
  warning?: boolean;
  success?: boolean;
}

export const INPUT_CLASSES = ({
  small,
  error,
  warning,
  success
}: InputProps) => ({
  "w-full rounded-input px-4 py-2 border border-solid border-gray-200 text-gray-700 appearance-none dark:bg-neutral-extra-light":
    true,
  "hover:border-primary hover:outline hover:outline-2 hover:outline-primary-extra-light":
    true,
  "active:border-tertiary active:outline active:outline-2 active:outline-tertiary-extra-light":
    true,
  "focus:border-tertiary focus:outline focus:outline-2 focus:outline-tertiary-extra-light":
    true,
  "disabled:pointer-events-none": true,
  "text-sm px-2": small,
  "border-error outline outline-2 outline-error-extra-light hover:outline-error-extra-light active:outline-error-extra-light focus:outline-error-extra-light hover:border-error active:border-error focus:border-error":
    error,
  "border-warning outline outline-2 outline-warning-extra-light hover:outline-warning-extra-light active:outline-warning-extra-light focus:outline-warning-extra-light hover:border-warning active:border-warning focus:border-warning":
    warning,
  "border-success outline outline-2 outline-success-extra-light hover:outline-success-extra-light active:outline-success-extra-light focus:outline-success-extra-light hover:border-success active:border-success focus:border-success":
    success
});

export function Input({
  className,
  small,
  error,
  warning,
  success,
  ...props
}: InputProps) {
  return (
    <input
      className={classNames(
        INPUT_CLASSES({ small, error, warning, success }),
        className
      )}
      {...props}
    />
  );
}
