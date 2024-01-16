import { HTMLProps } from "react";

import classNames from "classnames";

import { WithOptionalClassname } from "../../types";

export interface RadioProps
  extends HTMLProps<HTMLInputElement>,
    WithOptionalClassname {
  id: string;
  label: string;
  labelClassName?: string;
}

export function Radio({
  id,
  label,
  className,
  labelClassName,
  ...props
}: RadioProps) {
  return (
    <div className={classNames("flex items-center", className)}>
      <input
        className="w-4 h-4 accent-primary"
        {...props}
        type="radio"
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
