/**
 * 将类型`T`中的所有属性设置为只读
 * @example
 * ```typescript
 * interface Todo {
 *     title: string;
 * }
 * type  T0 = QReadonly<Todo>
 * // type T0 = {readonly title: string}
 * ```
 */
export type QReadonly<T> = {
    readonly [K in keyof T]: T[K]
}

// test
interface Todo {
    title: string;
}
type  T0 = QReadonly<Todo>
// type T0 = {readonly title: string}
