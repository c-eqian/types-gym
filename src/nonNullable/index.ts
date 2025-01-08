/**
 * 通过从 `U` 中排除 `null` 和 `undefined` 来构造一个类型。
 * @example
 * ```typescript
 * type T0 = QNonNullable<string | number | undefined>;
 * // type T0 = string | number
 * ```
 */
export type QNonNullable<U> = U extends null | undefined ? never : U


// test
type T0 = QNonNullable<string | number | undefined>;
