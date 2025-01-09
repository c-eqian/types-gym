import { QPick } from "../pick";

// 辅助类型
type CapitalizeEvents<T> = {
    [K in keyof T as `on${Capitalize<string & K>}`]: T[K]
};

/**
 * 将类型`E`中提取指定`P`属性转为事件类型，当P继承于`null`时，将转换全部
 * @example
 * ```typescript
 * type Props = {
 *     click: (e: MouseEvent) => void;
 *     selected: (e: MouseEvent) => void;
 * }
 * type P0= QEventsProps<Props, null>
 * // type P0 = {onClick: (e: MouseEvent) => void, onSelected: (e: MouseEvent) => void}
 *
 * type P1= QEventsProps<Props, 'click'>
 * // type P0 = {onClick: (e: MouseEvent) => void}
 * ```
 */
export type QEventsProps<E extends object, P extends keyof E | null> =
    P extends null ? CapitalizeEvents<E> :
        P extends keyof E ? CapitalizeEvents<QPick<E, P>> : never;

type Props = {
    click: (e: MouseEvent) => void;
    selected: (e: MouseEvent) => void;
}
type P0= QEventsProps<Props, null>
// type P0 = {onClick: (e: MouseEvent) => void, onSelected: (e: MouseEvent) => void}

type P1= QEventsProps<Props, 'click'>
// type P0 = {onClick: (e: MouseEvent) => void}
