import { HTMLProps } from "react";

import classNames from "classnames";

import { WithOptionalClassname } from "../../types";

export interface CheckboxProps
  extends HTMLProps<HTMLInputElement>,
    WithOptionalClassname {
  id: string;
  label: string;
  labelClassName?: string;
}

export function Checkbox({
  id,
  label,
  className,
  labelClassName,
  ...props
}: CheckboxProps) {
  return (
    <div className={classNames("flex items-center", className)}>
      <input
        className="w-4 h-4 accent-primary"
        {...props}
        type="checkbox"
        id={id}
      />
      <label
        htmlFor={id}
        className={classNames("ms-2 text-sm font-medium", labelClassName)}
      >
        {label}
      </label>
    </div>
  );
}
