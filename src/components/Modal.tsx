import { useCallback, useState } from "react";

import classNames from "classnames";

import { useChildren } from "../hooks";
import { SimpleHandler, WithChildren, WithOptionalClassname } from "../types";
import { Icon } from "./Icon";

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
        "bg-[rgb(236,240,241,.8)] dark:bg-[rgb(236,240,241,.9)]"
      )}
      data-testid="ModalBackground"
      onClick={closeOnOutsideClick ? onClose : undefined}
    >
      <div
        className="relative p-4 w-full max-w-2xl max-h-full"
        data-testid="Modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative bg-white rounded-generic shadow dark:bg-dark-primary">
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
        className="text-neutral dark:text-neutral-extra-light bg-transparent hover:bg-neutral-extra-light dark:hover:bg-neutral rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
        onClick={onClose}
      >
        <Icon name="Close" />
      </button>
    </div>
  );
}

function ModalContent({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <div
      className={classNames(
        "p-4 md:p-5 space-y-4 dark:text-neutral-extra-light",
        className
      )}
    >
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
