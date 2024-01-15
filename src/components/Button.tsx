import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from "react";

import classNames from "classnames";

import { WithOptionalClassname } from "../types";

export interface ButtonProps
  extends WithOptionalClassname,
    Omit<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      "style"
    > {
  style?: "primary" | "secondary" | "tertiary";
  outlined?: boolean;
  small?: boolean;
}

export function Button({
  style = "primary",
  outlined,
  small,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "rounded-lg text-white px-4 py-2 border border-solid",
        "hover:outline hover:outline-2",
        {
          "bg-primary border-primary hover:outline-primary-extra-light":
            style === "primary" && !outlined,
          "bg-secondary border-secondary hover:outline-secondary-extra-light":
            style === "secondary" && !outlined,
          "bg-tertiary border-tertiary hover:outline-tertiary-extra-light":
            style === "tertiary" && !outlined,
          "!text-primary border-primary hover:outline-primary-extra-light":
            style === "primary" && outlined,
          "!text-secondary border-secondary hover:outline-secondary-extra-light":
            style === "secondary" && outlined,
          "!text-tertiary border-tertiary hover:outline-tertiary-extra-light":
            style === "tertiary" && outlined,
          "text-sm px-2": small
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
