/**
 * 将字符串类型的`PascalCase`大驼峰或者`camelCase`小驼峰转成烤肉串
 * @example
 * ```typescript
 * type F0 = QKebabCase<"FooBarBaz">
 * // type F0 = "foo-bar-baz"
 *
 * type F1 = QKebabCase<"fooBarBaz">
 * // type F1 = "foo-bar-baz"
 *
 * type F2 = QKebabCase<"foo-bar-baz">
 * // type F2 = "foo-bar-baz"
 *
 * type F3 = QKebabCase<"foobarbaz">
 * // type F3 = ""foobarbaz""
 * ```
 */
export type QKebabCase<S extends string>  =
    S extends `${infer S1}${infer S2}`
        ? S2 extends Uncapitalize<S2> // 如果T2继承于首字母转小写Uncapitalize，说明该类型是小驼峰
            ? `${Uncapitalize<S1>}${QKebabCase<S2>}` // 首字符转小写后，再次转换
            :`${Uncapitalize<S1>}-${QKebabCase<S2>}` // 转换完成
        : S;

// test
type F0 = QKebabCase<"FooBarBaz">
// type F0 = "foo-bar-baz"

type F1 = QKebabCase<"fooBarBaz">
// type F1 = "foo-bar-baz"

type F2 = QKebabCase<"foo-bar-baz">
// type F2 = "foo-bar-baz"

type F3 = QKebabCase<"foobarbaz">
// type F3 = ""foobarbaz""
