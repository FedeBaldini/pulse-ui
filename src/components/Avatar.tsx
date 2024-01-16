import { useCallback, useState } from "react";

import classNames from "classnames";

import { WithOptionalClassname } from "../types";

export interface AvatarProps extends WithOptionalClassname {
  firstName?: string;
  lastName?: string;
  src?: string;
  size?: "small" | "medium" | "large";
}

export function Avatar({
  firstName,
  lastName,
  src,
  size = "medium",
  className
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const [initials, setInitials] = useState("");

  const handleImageError = useCallback(() => {
    setHasError(true);
    if (!firstName && !lastName) return;
    setInitials(
      `${firstName?.charAt(0).toUpperCase()}${lastName?.charAt(0).toUpperCase()}`
    );
  }, [firstName, lastName, src]);

  return (
    <div
      className={classNames(
        "rounded-full bg-neutral-light flex items-center justify-center",
        {
          "h-8 w-8": size === "small",
          "h-12 w-12": size === "medium",
          "h-16 w-16": size === "large"
        },
        className
      )}
      data-testid="Avatar"
    >
      {hasError ? (
        initials && (
          <span
            className={classNames("font-semibold", {
              "text-xl": size === "medium",
              "text-2xl": size === "large"
            })}
            data-testid="AvatarInitials"
          >
            {initials}
          </span>
        )
      ) : (
        <img
          className="rounded-full w-full h-full object-cover"
          src={src}
          onError={handleImageError}
          data-testid="AvatarImage"
        />
      )}
    </div>
  );
}
