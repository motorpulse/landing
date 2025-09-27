export type SelectiveNonNullable<T, Keys extends keyof T> = Omit<T, Keys> &
  Required<{
    [Key in Keys]: NonNullable<T[Key]>;
  }>;
