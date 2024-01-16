import { HTMLProps } from "react";

import classNames from "classnames";

import { WithOptionalClassname } from "../../types";

export interface SwitchProps
  extends HTMLProps<HTMLInputElement>,
    WithOptionalClassname {
  label: string;
  labelClassName?: string;
}

export function Switch({
  label,
  className,
  labelClassName,
  disabled,
  ...props
}: SwitchProps) {
  return (
    <label
      className={classNames(
        "relative inline-flex items-center",
        { "cursor-pointer": !disabled },
        className
      )}
    >
      <input
        {...props}
        type="checkbox"
        className="sr-only peer"
        disabled={disabled}
      />
      <div
        className={classNames(
          "w-11 h-6 bg-neutral-extra-light rounded-full peer",
          "peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-extra-light",
          "peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:bg-primary",
          "after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
        )}
      />
      <span
        className={classNames(
          "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300",
          labelClassName
        )}
      >
        {label}
      </span>
    </label>
  );
}
