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
        "pr-8 !bg-[calc(100%_-_0.75rem)] !bg-white dark:!bg-neutral-extra-light",
        className
      )}
      {...props}
      style={{
        background:
          "url(\"data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>\") no-repeat"
      }}
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
