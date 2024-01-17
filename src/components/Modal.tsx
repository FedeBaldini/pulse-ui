import { useCallback, useState } from "react";

import classNames from "classnames";

import { useChildren } from "../hooks";
import { SimpleHandler, WithChildren, WithOptionalClassname } from "../types";

export interface ModalProps extends WithChildren {
  isOpen?: boolean;
  onClose?: SimpleHandler;
  closeOnOutsideClick?: boolean;
}

export function Modal({
  children,
  isOpen,
  closeOnOutsideClick,
  onClose
}: ModalProps) {
  const { getChildrenOfType } = useChildren(children);

  const header = getChildrenOfType(Modal.Header);
  const content = getChildrenOfType(Modal.Content);
  const actions = getChildrenOfType(Modal.Actions);

  return (
    <div
      className={classNames(
        {
          hidden: !isOpen,
          "flex justify-center items-center w-full h-full max-h-full md:inset-0":
            isOpen
        },
        "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50",
        "bg-[rgb(236,240,241,.8)]"
      )}
      data-testid="ModalBackground"
      onClick={closeOnOutsideClick ? onClose : undefined}
    >
      <div
        className="relative p-4 w-full max-w-2xl max-h-full"
        data-testid="Modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative bg-white rounded-default shadow">
          {header}
          {content}
          {actions}
        </div>
      </div>
    </div>
  );
}

function ModalHeader({
  children,
  className,
  onClose
}: WithChildren & WithOptionalClassname & { onClose: SimpleHandler }) {
  return (
    <div
      className={classNames(
        "flex items-center justify-between p-4 md:p-6 border-b rounded-t-default",
        className
      )}
    >
      {children}
      <button
        type="button"
        className="text-neutral bg-transparent hover:bg-neutral-extra-light rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
        onClick={onClose}
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
    </div>
  );
}

function ModalContent({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <div className={classNames("p-4 md:p-5 space-y-4", className)}>
      {children}
    </div>
  );
}

function ModalActions({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <div
      className={classNames(
        "flex items-center p-4 md:p-5 border-t rounded-b-default",
        className
      )}
    >
      {children}
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Actions = ModalActions;

export function useModal() {
  const [isOpen, setOpen] = useState(false);

  return {
    open: useCallback(() => {
      setOpen(true);
    }, []),
    close: useCallback(() => {
      setOpen(false);
    }, []),
    isOpen
  };
}
