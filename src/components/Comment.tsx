import classNames from "classnames";

import { useChildren } from "../hooks";
import { WithChildren, WithOptionalClassname } from "../types";
import { Avatar, AvatarProps } from "./Avatar";
import { Title } from "./Title";

export interface CommentProps extends WithChildren {}

export function Comment({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  const { getChildrenOfType } = useChildren(children);

  const avatar = getChildrenOfType(Comment.Avatar);
  const author = getChildrenOfType(Comment.Author);
  const content = getChildrenOfType(Comment.Content);
  const actions = getChildrenOfType(Comment.Actions);
  const meta = getChildrenOfType(Comment.Meta);

  return (
    <div
      className={classNames(
        "grid grid-cols-[auto_1fr] gap-2 md:gap-4",
        className
      )}
    >
      {avatar}
      <div>
        <div className="flex items-center gap-2">
          {author}
          {meta}
        </div>
        {content}
        {actions}
      </div>
    </div>
  );
}

function CommentAvatar(props: AvatarProps) {
  return <Avatar {...props} />;
}

function CommentAuthor({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <Title as="h6" className={className}>
      {children}
    </Title>
  );
}

function CommentContent({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <p className={classNames("text-sm leading-none mt-1", className)}>
      {children}
    </p>
  );
}

function CommentActions({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <div className={classNames("flex items-center gap-2 mt-2", className)}>
      {children}
    </div>
  );
}

function CommentMeta({
  children,
  className
}: WithChildren & WithOptionalClassname) {
  return (
    <span className={classNames("text-sm text-neutral", className)}>
      {children}
    </span>
  );
}

export interface CommentGroupProps extends WithChildren, WithOptionalClassname {
  separator?: boolean;
}

function CommentGroup({ children, className, separator }: CommentGroupProps) {
  const { getChildrenOfType } = useChildren(children);
  const comments = getChildrenOfType(Comment);

  return (
    <ul
      className={classNames(
        "flex flex-col items-start gap-4 md:gap-6 xl:gap-8 list-none",
        className
      )}
    >
      {Array.isArray(comments)
        ? comments.map((comment) => (
            <li
              className={classNames({
                "pb-4 md:pb-6 xl:pb-8 border-solid border-b border-neutral-light last:border-b-0":
                  separator
              })}
            >
              {comment}
            </li>
          ))
        : null}
    </ul>
  );
}

Comment.Avatar = CommentAvatar;
Comment.Author = CommentAuthor;
Comment.Content = CommentContent;
Comment.Actions = CommentActions;
Comment.Meta = CommentMeta;
Comment.Group = CommentGroup;
