import {
  Children,
  ComponentType,
  isValidElement,
  ReactElement,
  ReactNode,
  useMemo
} from "react";

import { Nullable, OneOrMore } from "../types";

interface UseChildren {
  /**
   * Retrieves children of a specific type.
   *
   * @template Props - The props type for the specified component type.
   * @param {ComponentType<Props>} type - The component type to filter children.
   * @returns {Nullable<OneOrMore<ReactElement<Props>>>} The filtered children of the specified type.
   */
  getChildrenOfType<Props = any>(
    type: ComponentType<Props>
  ): Nullable<OneOrMore<ReactElement>>;

  /**
   * Excludes children of a specific type.
   *
   * @template Props - The props type for the specified component type.
   * @param {ComponentType<Props>} type - The component type to exclude from children.
   * @returns {Nullable<OneOrMore<ReactElement<Props>>>} The children excluding the specified type.
   */
  excludeChildrenOfType<Props = any>(
    type: ComponentType<Props>
  ): Nullable<OneOrMore<ReactElement>>;
}

function isReactElement(child: ReactNode): child is ReactElement {
  return isValidElement(child);
}

/**
 * Custom React hook for working with children in a component.
 *
 * This hook provides utility functions to filter and manipulate children components within a parent component.
 *
 * @param {ReactNode} children - The children components to process.
 * @returns {UseChildren} An object containing functions to retrieve and manipulate children.
 * @example
 * const { getChildrenOfType, excludeChildrenOfType } = useChildren(children);
 * const avatars = getChildrenOfType(Avatar);
 * const nonAvatarChildren = excludeChildrenOfType(Avatar);
 */
export function useChildren(children: ReactNode): UseChildren {
  return useMemo(() => {
    const asArray = Children.toArray(children);

    function getChildrenOfType<Props = any>(type: ComponentType<Props>) {
      const elements = asArray.filter(
        (child: ReactNode) => isReactElement(child) && child.type === type
      ) as ReactElement[];

      if (elements.length === 0) return null;
      if (elements.length === 1) return elements[0];

      return elements;
    }

    function excludeChildrenOfType<Props = any>(type: ComponentType<Props>) {
      const elements = asArray.filter(
        (child: ReactNode) => isReactElement(child) && child.type !== type
      ) as ReactElement[];

      if (elements.length === 0) return null;
      if (elements.length === 1) return elements[0];

      return elements;
    }

    return {
      getChildrenOfType,
      excludeChildrenOfType
    };
  }, [children]);
}
