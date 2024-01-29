import classNames from "classnames";

import { useChildren } from "../hooks";
import { SimpleHandler, WithChildren, WithOptionalClassname } from "../types";
import { CloseButton } from "./CloseButton";

export interface DrawerProps extends WithChildren {
  isOpen: boolean;
  position?: "left" | "right";
}

export function Drawer({ isOpen, position = "left", children }: DrawerProps) {
  const { getChildrenOfType } = useChildren(children);
  const header = getChildrenOfType(Drawer.Header);
  const content = getChildrenOfType(Drawer.Content);
  const footer = getChildrenOfType(Drawer.Footer);

  return (
    <div
      className={classNames(
        "fixed top-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-full md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg",
        "flex flex-col gap-2 md:gap-4 lg:gap-6",
        {
          "-translate-x-full": !isOpen && position === "left",
          "translate-x-full": !isOpen && position === "right",
          "left-0": position === "left",
          "right-0": position === "right"
        }
      )}
    >
      {header}
      {content}
      {footer}
    </div>
  );
}

interface DrawerHeaderProps extends WithChildren, WithOptionalClassname {
  onClose: SimpleHandler;
}

function DrawerHeader({ children, className, onClose }: DrawerHeaderProps) {
  return (
    <div className={classNames("flex items-center justify-between", className)}>
      {children}
      <CloseButton onClick={onClose} />
    </div>
  );
}

function DrawerContent({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return <div className={className}>{children}</div>;
}

function DrawerFooter({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return <div className={className}>{children}</div>;
}

Drawer.Header = DrawerHeader;
Drawer.Content = DrawerContent;
Drawer.Footer = DrawerFooter;
