// import {QPick} from "../pick";
// import {QExclude} from "../exclude";

/**
 * 从类型`T`中，剔除在`P`中出现的类型
 * @example
 * ```typescript
 * interface Todo {
 *   title: string;
 *   description: string;
 *   completed: boolean;
 *   createdAt: number;
 * }
 * type TodoPreview = QOmit<Todo, "description">;
 * // TodoPreview= {
 *   title: string;
 *   completed: boolean;
 *   createdAt: number;
 * }
 * ```
 */
export type QOmit<T extends object, E extends keyof T> = {[K in keyof T as K extends E ? never : K]: T[K]}
// 使用Pick与Exclude
// export type QOmit<T extends object, E extends keyof T> = QPick<T, QExclude<keyof T, E>>


// test
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}
type TodoPreview = QOmit<Todo, 'description'>;
