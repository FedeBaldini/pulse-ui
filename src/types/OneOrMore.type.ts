/**
 * Represents a type that can either be a single instance of the specified type or an array of instances.
 *
 * @template T - The base type for which a single or multiple instances are allowed.
 * @description A type that can be either a single instance of the specified type or an array of instances.
 */
export type OneOrMore<T> = T | T[];
