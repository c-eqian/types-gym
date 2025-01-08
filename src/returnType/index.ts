/**
 * 从一个构造函数中提取该函数的额返回类型，对于重载函数，这将是最后一个签名的返回类型
 * @example
 * ```typescript
 * declare function f1(): { a: number; b: string };
 * type T0 = QReturnType<() => string>;
 * // type T0 = string
 * ```
 */
export type QReturnType<F extends (...args:any)=> any> = F extends (...args: any) => infer R ? R : any;

// test
declare function f1(): { a: number; b: string };
type T0 = QReturnType<() => string>;
// type T0 = string
