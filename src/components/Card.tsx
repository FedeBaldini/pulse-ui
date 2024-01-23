import { HTMLProps, useEffect } from "react";

import classNames from "classnames";

import { useChildren } from "../hooks";
import { WithChildren, WithOptionalClassname } from "../types";
import { Title, TitleProps } from "./Title";
import { Typography, TypographyProps } from "./Typography";

export type CardProps = WithChildren & WithOptionalClassname;

export function Card({ children, className }: CardProps) {
  const { getChildrenOfType } = useChildren(children);

  const header = getChildrenOfType(Card.Header);
  const image = getChildrenOfType(Card.Image);
  const title = getChildrenOfType(Card.Title);
  const subTitle = getChildrenOfType(Card.SubTitle);
  const content = getChildrenOfType(Card.Content);
  const footer = getChildrenOfType(Card.Footer);

  useEffect(() => {
    if (!content) {
      throw new Error(
        "You must provide at least on Card.Content inside the Card component."
      );
    }
  }, [content]);

  if (!content) return;

  return (
    <div
      className={classNames(
        "bg-white rounded-generic shadow max-w-full md:max-w-96",
        className
      )}
    >
      {header}
      {image}
      <div className="flex flex-col gap-2 px-2 pb-2 md:px-4 md:pb-4">
        {title}
        {subTitle}
        {content}
      </div>
      {footer}
    </div>
  );
}

function CardHeader({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <div className={classNames("p-2 md:p-4 border-b", className)}>
      {children}
    </div>
  );
}

function CardImage({
  className,
  ...props
}: WithOptionalClassname & HTMLProps<HTMLImageElement>) {
  return (
    <img
      className={classNames("w-full h-full object-contain border-b", className)}
      {...props}
      role="img"
    />
  );
}

function CardTitle({
  children,
  as = "h5",
  className
}: WithChildren & Pick<TitleProps, "as"> & WithOptionalClassname) {
  return (
    <Title as={as} className={classNames("mt-2 md:mt-4 !mb-0", className)}>
      {children}
    </Title>
  );
}

function CardSubTitle({
  children,
  type = "medium",
  className
}: WithChildren & Pick<TypographyProps, "type"> & WithOptionalClassname) {
  return (
    <Typography
      className={classNames("!m-0 text-neutral-dark", className)}
      type={type}
    >
      {children}
    </Typography>
  );
}

function CardContent({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return <div className={className}>{children}</div>;
}

function CardFooter({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <div className={classNames("p-2 md:p-4 border-t", className)}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Image = CardImage;
Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;
