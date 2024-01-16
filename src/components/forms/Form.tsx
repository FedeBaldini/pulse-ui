import { HTMLProps } from "react";

import classNames from "classnames";

import { WithChildren, WithOptionalClassname } from "../../types";

export type FormProps = WithOptionalClassname & HTMLProps<HTMLFormElement>;

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form
      className={classNames("flex flex-col gap-2 md:gap-4 xl:gap-6", className)}
      {...props}
    >
      {children}
    </form>
  );
}

export interface FormFieldProps extends WithChildren, WithOptionalClassname {
  id: string;
  label: string;
  labelClassName?: string;
}

Form.Field = function FormField({
  id,
  label,
  children,
  className,
  labelClassName
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        className={classNames(
          "mb-1 inline-block font-semibold text-sm",
          labelClassName
        )}
        htmlFor={id}
      >
        {label}
      </label>
      {children}
    </div>
  );
};
