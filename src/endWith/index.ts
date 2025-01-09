/**
 * 与`QStartWith`相反，检查某个字符串类型`S`是否以`E`结尾，返回`true/false`
 * @example
 * ```typescript
 * type P0 = QEndWith<'onClick', 'on'>
 * // type P0 = true
 *
 * type P1 = QEndWith<'onClick', 'a'>
 * // type P0 = false
 * ```
 */
export type QEndWith<S extends string,E extends string> = S extends `${infer R}${E}` ? true  : false;

// test
type P0 = QEndWith<'onClick', 'ck'>
// type P0 = true

type P1 = QEndWith<'onClick', 'a'>
// type P0 = false
