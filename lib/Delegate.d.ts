type Callback = (...args: any[]) => any;
export interface IDelegate<T extends Callback = () => any> {
    add(callback: T): void;
    remove(callback: T): void;
}
export default class Delegate<T extends Callback = () => void> implements IDelegate<T> {
    protected callbacks: Set<T>;
    constructor();
    add(callback: T): void;
    remove(callback: T): void;
    invoke(...args: any[]): any;
}
export {};
//# sourceMappingURL=Delegate.d.ts.map