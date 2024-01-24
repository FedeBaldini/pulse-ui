import { useMemo } from "react";

import classNames from "classnames";

import { SimpleHandler, WithChildren, WithOptionalClassname } from "../types";
import { Icon } from "./Icon";

export interface ToastProps extends WithOptionalClassname, WithChildren {
  onClose: SimpleHandler;
  error?: boolean;
  warning?: boolean;
  success?: boolean;
}

export function Toast({
  onClose,
  error,
  warning,
  success,
  className,
  children
}: ToastProps) {
  const icon = useMemo(() => {
    switch (true) {
      case error:
        return <ErrorIcon />;
      case warning:
        return <WarningIcon />;
      case success:
        return <SuccessIcon />;
      default:
        return null;
    }
  }, [error, warning, success]);

  return (
    <div
      className={classNames(
        "flex items-center justify-between w-full max-w-xs p-4 mb-4 rounded-generic shadow gap-2",
        "text-neutral-dark bg-white dark:text-dark-primary dark:bg-neutral-extra",
        className
      )}
      role="alert"
    >
      {icon}
      {children}
      <CloseButton onClick={onClose} />
    </div>
  );
}

function CloseButton({ onClick }: { onClick: SimpleHandler }) {
  return (
    <button
      type="button"
      className="text-neutral dark:text-neutral-extra-light bg-transparent hover:bg-neutral-extra-light dark:hover:bg-neutral rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
      onClick={onClick}
      data-testid="CloseButton"
    >
      <Icon name="Close" />
    </button>
  );
}

function ErrorIcon() {
  return (
    <div
      className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-error"
      data-testid="ErrorIcon"
    >
      <Icon name="Error" className="w-5 h-5" />
    </div>
  );
}

function WarningIcon() {
  return (
    <div
      className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-warning"
      data-testid="WarningIcon"
    >
      <Icon name="Warning" />
    </div>
  );
}

function SuccessIcon() {
  return (
    <div
      className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-success"
      data-testid="SuccessIcon"
    >
      <Icon name="Success" />
    </div>
  );
}
