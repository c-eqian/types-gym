/**
 * 从一个函数中提取该函数的参数类型
 * @example
 * ```typescript
 * declare function f1(arg: { a: number; b: string }): void;
 *
 * type T0 = QParameters<typeof f1>;
 * // type T0 = [arg: {a: number, b: string}]
 *
 * type T1 = QParameters<(name:string)=> void>;
 * // type T1=[name: string]
 * ```
 */
export type QParameters<F extends (...args:any)=> any> = F extends (...args:infer P) => any ? P : never; // infer的作用个人理解是可推断出一个类型并将一个类型绑定起来

// test
declare function f1(arg: { a: number; b: string }): void;
type T0 = QParameters<typeof f1>;
// type T0 = [arg: {a: number, b: string}]

type T1 = QParameters<(name:string)=> void>;
// type T1=[name: string]
