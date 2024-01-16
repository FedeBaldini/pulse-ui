import { HTMLProps } from "react";

import classNames from "classnames";

import { INPUT_CLASSES, InputProps } from "./Input";

export type TextAreaProps = HTMLProps<HTMLTextAreaElement> &
  Omit<InputProps, "small">;

export function TextArea({
  className,
  error,
  warning,
  success,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      className={classNames(
        INPUT_CLASSES({ error, warning, success }),
        className
      )}
      {...props}
    />
  );
}
