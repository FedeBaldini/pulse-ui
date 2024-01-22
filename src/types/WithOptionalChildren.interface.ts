import { ReactNode } from "react";

/**
 * Interface for components that may accept React nodes as optional children.
 *
 * @property {ReactNode} [children] - Optional React nodes that can be rendered as children.
 */
export interface WithOptionalChildren {
  children?: ReactNode;
}
