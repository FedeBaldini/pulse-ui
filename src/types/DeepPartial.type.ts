/**
 * Represents a deeply partial version of a given type.
 *
 * @template T - The type for which a deeply partial version is created.
 */
export type DeepPartial<T> = {
  [property in keyof T]?: T[property] extends Function | Date
    ? T[property]
    : T[property] extends object
      ? DeepPartial<T[property]>
      : T[property];
};
