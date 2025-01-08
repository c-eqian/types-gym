/**
 * QExtract<UnionType, IncludedMembers>
 * 与`QExclude`相反，在联合类型`UnionType`中，提取与`IncludedMembers`具有交叉的类型
 * @example
 * ```typescript
 * type T0 = QExtract<"a" | "b" | "c", "a">;
 *
 * // type T0 = "a"
 * ```
 */
export type QExtract<U, I extends U> = U extends I ? U: never

// test
type T0 = QExtract<"a" | "b" | "c", "a">
