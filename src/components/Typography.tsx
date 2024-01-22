import classNames from "classnames";

import { WithChildren, WithOptionalClassname } from "../types";

export type TypographyType =
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "leadSmall"
  | "leadMedium"
  | "leadLarge"
  | "leadExtraLarge"
  | "boldSmall"
  | "boldMedium"
  | "boldLarge"
  | "boldExtraLarge";

export interface TypographyProps extends WithOptionalClassname, WithChildren {
  type?: TypographyType;
}

export function Typography({
  type = "medium",
  children,
  className
}: TypographyProps) {
  return (
    <p
      className={classNames(
        "my-2 dark:text-neutral-extra-light",
        {
          "text-xs": type === "small",
          "text-md": type === "medium",
          "text-lg": type === "large",
          "text-xl": type === "boldExtraLarge",
          "text-xs font-light": type === "leadSmall",
          "text-md font-light": type === "leadMedium",
          "text-lg font-light": type === "leadLarge",
          "text-xl font-light": type === "leadExtraLarge",
          "text-xs font-semibold": type === "boldSmall",
          "text-md font-semibold": type === "boldMedium",
          "text-lg font-semibold": type === "boldLarge",
          "text-xl font-semibold": type === "boldExtraLarge"
        },
        className
      )}
    >
      {children}
    </p>
  );
}
