// @flow

declare module 'object.omit' {
  declare export default function omit<
    O: {},
    K: $ReadOnlyArray<string>,
  >(obj: O, keys: K): $Diff<O, { [key: K]: mixed }>;
}
