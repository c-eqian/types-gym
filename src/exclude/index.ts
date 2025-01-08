/**
 * QExclude<UnionType, ExcludedMembers>
 *
 * 在联合类型`UnionType`中，排除掉与`ExcludedMembers`具有交叉的类型
 * @example
 * ```typescript
 * type T0 = QExclude<"a" | "b" | "c", "a">;
 *
 * // type T0 = "b" | "c"
 * ```
 */
export type QExclude<U, E extends U> = U extends E ? never: U

// test
type T0 = QExclude<"a" | "b" | "c", "a">
