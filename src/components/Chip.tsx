import classNames from "classnames";

import { WithChildren, WithOptionalClassname } from "../types";

export interface ChipProps extends WithOptionalClassname, WithChildren {
  style?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "warning"
    | "success"
    | "neutral";
}

export function Chip({ style, children, className }: ChipProps) {
  return (
    <span
      className={classNames(
        "font-semibold text-white px-2 py-1 rounded-default",
        {
          "bg-primary border-primary hover:outline-primary-extra-light":
            style === "primary",
          "bg-secondary border-secondary hover:outline-secondary-extra-light":
            style === "secondary",
          "bg-tertiary border-tertiary hover:outline-tertiary-extra-light":
            style === "tertiary",
          "bg-error border-error hover:outline-error-extra-light":
            style === "error",
          "bg-warning border-warning hover:outline-warning-extra-light":
            style === "warning",
          "bg-success border-success hover:outline-success-extra-light":
            style === "success",
          "bg-neutral border-neutral hover:outline-neutral-extra-light":
            style === "neutral"
        },
        className
      )}
    >
      {children}
    </span>
  );
}
