/**
 * 与QPartial相反，将类型`T`所有属性设置为必选
 * @example
 * ```typescript
 * interface Todo {
 *     a?: number;
 *     b?: string;
 * }
 * type T0=  QRequired<Todo>
 * // type T0 = {a: number, b: string}
 * ```
 */

export type QRequired<T> = {
    // -? 移除可选性`?`
    [K in keyof T]-?: T[K]
}

// test
interface Todo {
    a?: number;
    b?: string;
}
type T0=  QRequired<Todo>
// type T0 = {a: number, b: string}
