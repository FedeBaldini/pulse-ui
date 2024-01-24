import { SVGProps } from "react";

import classNames from "classnames";

import { WithOptionalClassname } from "../../types";
import { IconName } from "./IconName.type";

export type SvgIconProps = SVGProps<SVGSVGElement> & WithOptionalClassname;

function Error({ className, ...props }: SvgIconProps) {
  return (
    <svg
      className={classNames("w-5 h-5", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
      data-testid={Error.name}
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
    </svg>
  );
}

function Warning({ className, ...props }: SvgIconProps) {
  return (
    <svg
      className={classNames("w-5 h-5", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
      data-testid={Warning.name}
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
    </svg>
  );
}

function Success({ className, ...props }: SvgIconProps) {
  return (
    <svg
      className={classNames("w-5 h-5", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
      data-testid={Success.name}
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
}

function Close({ className, ...props }: SvgIconProps) {
  return (
    <svg
      className={classNames("w-3 h-3", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      {...props}
      data-testid={Close.name}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  );
}

function ArrowDown({ className, ...props }: SvgIconProps) {
  return (
    <svg
      className={classNames("w-3 h-3", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
      {...props}
      data-testid={ArrowDown.name}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  );
}

export const Icons = {
  Error,
  Warning,
  Success,
  Close,
  ArrowDown
};

export const IconNames = Object.keys(Icons) as IconName[];
