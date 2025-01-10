/**
 * 接收一个条件类型 `T` ，一个判断为真时的返回类型 `F` ，以及一个判断为假时的返回类型 `C`。 `T` 只能是 true 或者 false
 * @example
 * ```typescript
 * type A = QIf<true, 'a', 'b'>
 * // type A = 'a'
 * type B = QIf<false, 'a', 'b'>
 * // type B = 'b'
 * ```
 */
export type QIf<T extends boolean, F, C> = T extends true ? F : T extends false ? C : never

// test
type A = QIf<true, 'a', 'b'>
// type A = 'a'
type B = QIf<false, 'a', 'b'>
// type B = 'b'
