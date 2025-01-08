/**
 * 将类型`T`的所有属性设置为可选类型
 * @example
 * ```typescript
 * interface Todo {
 *   title: string;
 *   description: string;
 * }
 * type T0 = QPartial<Todo>
 * // T0= {title?: string, description?: string}
 * ```
 */
export type QPartial<T> = {
    [K in keyof T]?: T[K];
}

// test
interface Todo {
    title: string;
    description: string;
}
type T0 = QPartial<Todo>
