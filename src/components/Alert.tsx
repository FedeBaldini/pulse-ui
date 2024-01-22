import { ReactNode } from "react";

import classNames from "classnames";

import { WithOptionalClassname } from "../types";

export interface AlertProps extends WithOptionalClassname {
  content: string;
  title?: ReactNode;
  error?: boolean;
  warning?: boolean;
  success?: boolean;
}

export function Alert({
  title,
  content,
  error,
  warning,
  success,
  className
}: AlertProps) {
  return (
    <div
      className={classNames(
        "rounded-generic p-2 md:p-4 border border-solid border-primary bg-primary-extra-light text-primary-dark",
        {
          "!border-error !bg-error-extra-light !text-error-dark": error,
          "!border-warning !bg-warning-extra-light !text-warning-dark": warning,
          "!border-success !bg-success-extra-light !text-success-dark": success
        },
        className
      )}
    >
      {title && <h3 className="font-semibold">{title}</h3>}
      {content}
    </div>
  );
}
