/**
 * 根据给定的类型`T`，提取`P`中出现的类型
 */
export type QPick<T extends object, P extends keyof T>= {
    [K in P]: T[K];
}

// test
type UserInfo = {
    name: string;
    email: string;
    password: string;
}
type User = QPick<UserInfo, 'email' | 'password'>
const todo: User = {
    email: 'john@gmail.com',
    password: 'john@gmail.com'
}
