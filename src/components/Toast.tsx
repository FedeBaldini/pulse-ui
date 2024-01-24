import { useMemo } from "react";

import classNames from "classnames";

import { SimpleHandler, WithChildren, WithOptionalClassname } from "../types";

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
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  );
}

function ErrorIcon() {
  return (
    <div
      className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-error"
      data-testid="ErrorIcon"
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
      </svg>
    </div>
  );
}

function WarningIcon() {
  return (
    <div
      className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-warning"
      data-testid="WarningIcon"
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
      </svg>
      <span className="sr-only">Warning icon</span>
    </div>
  );
}

function SuccessIcon() {
  return (
    <div
      className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-success"
      data-testid="SuccessIcon"
    >
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
    </div>
  );
}
