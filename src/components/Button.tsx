import { ButtonHTMLAttributes } from "react";

import classNames from "classnames";

import { SimpleHandler, WithChildren, WithOptionalClassname } from "../types";

export interface ButtonProps
  extends WithOptionalClassname,
    WithChildren,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "style"> {
  style?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "warning"
    | "success"
    | "neutral";
  outlined?: boolean;
  small?: boolean;
  disabled?: boolean;
  onClick?: SimpleHandler;
}

export function Button({
  style = "primary",
  outlined,
  small,
  children,
  disabled,
  onClick,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "rounded-default text-white px-4 py-2 border border-solid",
        "hover:outline hover:outline-2",
        "disabled:pointer-events-none disabled:opacity-60",
        {
          "bg-primary border-primary hover:outline-primary-extra-light":
            style === "primary" && !outlined,
          "bg-secondary border-secondary hover:outline-secondary-extra-light":
            style === "secondary" && !outlined,
          "bg-tertiary border-tertiary hover:outline-tertiary-extra-light":
            style === "tertiary" && !outlined,
          "bg-error border-error hover:outline-error-extra-light":
            style === "error" && !outlined,
          "bg-warning border-warning hover:outline-warning-extra-light":
            style === "warning" && !outlined,
          "bg-success border-success hover:outline-success-extra-light":
            style === "success" && !outlined,
          "bg-neutral border-neutral hover:outline-neutral-extra-light":
            style === "neutral" && !outlined,
          "!text-primary border-primary hover:outline-primary-extra-light":
            style === "primary" && outlined,
          "!text-secondary border-secondary hover:outline-secondary-extra-light":
            style === "secondary" && outlined,
          "!text-tertiary border-tertiary hover:outline-tertiary-extra-light":
            style === "tertiary" && outlined,
          "!text-error border-error hover:outline-error-extra-light":
            style === "error" && outlined,
          "!text-warning border-warning hover:outline-warning-extra-light":
            style === "warning" && outlined,
          "!text-success border-success hover:outline-success-extra-light":
            style === "success" && outlined,
          "!text-neutral border-neutral hover:outline-neutral-extra-light":
            style === "neutral" && outlined,
          "text-sm px-2": small
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
