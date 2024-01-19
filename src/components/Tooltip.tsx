import classNames from "classnames";

import { WithChildren } from "../types";

export interface TooltipProps extends WithChildren {
  message: string;
}

export function Tooltip({ message, children }: TooltipProps) {
  return (
    <div className="group relative flex">
      {children}
      <span
        className={classNames(
          "absolute top-[calc(100%_+_.25rem)] scale-0 transition-all z-50",
          "p-2 text-xs text-white",
          "rounded-default bg-dark-primary dark:bg-white dark:text-gray-700 group-hover:scale-100"
        )}
      >
        {message}
      </span>
    </div>
  );
}
