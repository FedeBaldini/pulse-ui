import classNames from "classnames";

import { ThemeStyle, WithOptionalClassname } from "../types";

export interface ProgressBarProps extends WithOptionalClassname {
  percentage: number;
  size?: "small" | "medium" | "large";
  style?: ThemeStyle;
}

export function ProgressBar({
  percentage,
  size = "medium",
  style = "primary",
  className
}: ProgressBarProps) {
  return (
    <div
      className={classNames(
        "w-full bg-gray-200 rounded-default mb-4",
        {
          "h-2": size === "small",
          "h-4": size === "medium",
          "h-6": size === "large"
        },
        className
      )}
      role="progressbar"
    >
      <div
        className={classNames("rounded-default", {
          "h-2": size === "small",
          "h-4": size === "medium",
          "h-6": size === "large",
          "bg-primary": style === "primary",
          "bg-secondary": style === "secondary",
          "bg-tertiary": style === "tertiary",
          "bg-error": style === "error",
          "bg-warning": style === "warning",
          "bg-success": style === "success",
          "bg-neutral": style === "neutral"
        })}
        style={{ width: `${percentage}%` }}
        data-testid="Percentage"
      />
    </div>
  );
}
