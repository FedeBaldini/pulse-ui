import { HTMLProps } from "react";

import classNames from "classnames";

import { INPUT_CLASSES, InputProps } from "./Input";

interface IOption {
  label: string;
  value: string;
}

export type SelectProps = HTMLProps<HTMLSelectElement> &
  InputProps & {
    options: IOption[];
    emptyOption?: IOption;
  };

export function Select({
  className,
  small,
  error,
  warning,
  success,
  options,
  emptyOption,
  ...props
}: SelectProps) {
  return (
    <select
      className={classNames(
        INPUT_CLASSES({ small, error, warning, success }),
        className
      )}
      {...props}
    >
      {emptyOption ? (
        <option value={emptyOption.value}>{emptyOption.label}</option>
      ) : null}
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
