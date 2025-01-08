/**
 * QRecord<Keys, Type>
 * 构造一个对象类型，其属性键为 Keys，其属性值为 Type。此工具可用于将一种类型的属性映射到另一种类型。
 * @example
 * ```typescript
 *
 * type CatName = "miffy" | "boris" | "mordred";
 *
 * interface CatInfo {
 *   age: number;
 *   breed: string;
 * }
 *
 * const cats: QRecord<CatName, CatInfo> = {
 *   miffy: { age: 10, breed: "Persian" },
 *   boris: { age: 5, breed: "Maine Coon" },
 *   mordred: { age: 16, breed: "British Shorthair" },
 * };
 * ```
 */
export type QRecord<K extends keyof any, T> ={
    [P in K]: T;
}

// test
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
    age: number;
    breed: string;
}

const cats: QRecord<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
