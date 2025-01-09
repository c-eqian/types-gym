/**
 * 检查某个字符串类型`S`是否以`P`开头，返回`true/false`
 * @example
 * ```typescript
 * type P0 = QStartWith<'onClick', 'on'>
 * // type P0 = true
 *
 * type P1 = QStartWith<'onClick', 'a'>
 * // type P0 = false
 * ```
 */
export type QStartWith<S extends string,P extends string> = S extends `${P}${infer R}` ? true  : false;

// test
type P0 = QStartWith<'onClick', 'on'>
// type P0 = true

type P1 = QStartWith<'onClick', 'a'>
// type P0 = false
