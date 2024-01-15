import { HTMLProps } from "react";

import classNames from "classnames";

import { INPUT_CLASSES, InputProps } from "./Input";

export type TextAreaProps = HTMLProps<HTMLTextAreaElement> & InputProps;

export function TextArea({
  className,
  small,
  error,
  warning,
  success,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      className={classNames(
        INPUT_CLASSES({ small, error, warning, success }),
        className
      )}
      {...props}
    />
  );
}
