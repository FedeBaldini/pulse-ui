import { ReactNode } from "react";

/**
 * Interface for components that accept React nodes as children.
 *
 * @property {ReactNode} children - React nodes that can be rendered as children.
 */
export interface WithChildren {
  children: ReactNode;
}
