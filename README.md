 # typescript类型体操
 > 避免与`typescript`内置类型冲突，这里的实现都以`Q`开头
## Pick

根据给定的类型`T`，提取`P`中出现的类型

```typescript
export type QPick<T extends object, P extends keyof T>= {
    [K in P]: T[K];
}
```

```typescript
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

```

## Exclude

`QExclude<UnionType, ExcludedMembers>`在联合类型`UnionType`中，**排除**掉与`ExcludedMembers`具有交叉的类型

```typescript
export type QExclude<U, E extends U> = U extends E ? never: U
```

```typescript
 type T0 = QExclude<"a" | "b" | "c", "a">;
 // type T0 = "b" | "c"
```

## Omit

从类型`T`中，剔除在`P`中出现的类型

```typescript
export type QOmit<T extends object, E extends keyof T> = {[K in keyof T as K extends E ? never : K]: T[K]}
```

```typescript
 interface Todo {
   title: string;
   description: string;
   completed: boolean;
   createdAt: number;
 }
 type TodoPreview = QOmit<Todo, "description">;
// TodoPreview= {
  title: string;
   completed: boolean;
  createdAt: number;
 }
```

## Extract

与`QExclude`相反，在联合类型`UnionType`中，**提取**与`IncludedMembers`具有交叉的类型

```typescript
export type QExtract<U, I extends U> = U extends I ? U: never
```

```typescript
type T0 = QExtract<"a" | "b" | "c", "a">;
// type T0 = "a"
```

## Partial

将类型`T`的所有属性设置为可选类型

```typescript
export type QPartial<T> = {
    [K in keyof T]?: T[K];
}
```

```typescript
interface Todo {
    title: string;
    description: string;
}
type T0 = QPartial<Todo>
// T0= {title?: string, description?: string}
```



## Required

与`Partial`相反，将类型`T`所有属性设置为必选

```typescript
export type QRequired<T> = {
    // -? 移除可选性`?`
    [K in keyof T]-?: T[K]
}
```

```typescript
interface Todo {
    a?: number;
    b?: string;
}
type T0=  QRequired<Todo>
// type T0 = {a: number, b: string}
```



## NonNullable

通过从 `U` 中排除 `null` 和 `undefined` 来构造一个类型。

```typescript
export type QNonNullable<U> = U extends null | undefined ? never : U
```

```typescript
type T0 = QNonNullable<string | number | undefined>;
// type T0 = string | number
```

## Parameters

从一个函数中提取该函数的参数类型

```typescript
// infer的作用个人理解是可推断出一个类型并将一个类型绑定起来
export type QParameters<F extends (...args:any)=> any> = F extends (...args:infer P) => any ? P : never; 

```

```typescript
declare function f1(arg: { a: number; b: string }): void;
type T0 = QParameters<typeof f1>;
// type T0 = [arg: {a: number, b: string}]

type T1 = QParameters<(name:string)=> void>;
// type T1=[name: string]
```



## ReturnType

一个构造函数中提取该函数的额返回类型，对于重载函数，这将是最后一个签名的返回类型

```typescript
export type QReturnType<F extends (...args:any)=> any> = F extends (...args: any) => infer R ? R : any;
```

```typescript
declare function f1(): { a: number; b: string };
type T0 = QReturnType<() => string>;
// type T0 = string
```

