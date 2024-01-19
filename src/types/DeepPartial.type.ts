export type DeepPartial<T> = {
  [property in keyof T]?: T[property] extends Function | Date
    ? T[property]
    : T[property] extends object
    ? DeepPartial<T[property]>
    : T[property];
};
