import Delegate, { IDelegate } from "./Delegate";
export interface IDelegateNoParam<R = void> extends IDelegate<() => R> {
}
export interface IDelegateOneParam<P1, R = void> extends IDelegate<(p1: P1) => R> {
}
export interface IDelegateTwoParams<P1, P2, R = void> extends IDelegate<(p1: P1, p2: P2) => R> {
}
export interface IDelegateThreeParams<P1, P2, P3, R = void> extends IDelegate<(p1: P1, p2: P2, p3: P3) => R> {
}
export interface IDelegateFourParams<P1, P2, P3, P4, R = void> extends IDelegate<(p1: P1, p2: P2, p3: P3, p4: P4) => R> {
}
export interface IDelegateFiveParams<P1, P2, P3, P4, P5, R = void> extends IDelegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5) => R> {
}
export interface IDelegateSixParams<P1, P2, P3, P4, P5, P6, R = void> extends IDelegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6) => R> {
}
export interface IDelegateSevenParams<P1, P2, P3, P4, P5, P6, P7, R = void> extends IDelegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7) => R> {
}
export interface IDelegateEightParams<P1, P2, P3, P4, P5, P6, P7, P8, R = void> extends IDelegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8) => R> {
}
export interface IDelegateNineParams<P1, P2, P3, P4, P5, P6, P7, P8, P9, R = void> extends IDelegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9) => R> {
}
export interface IDelegateTenParams<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R = void> extends IDelegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9, p10: P10) => R> {
}
export declare class DelegateNoParam<R = void> extends Delegate<() => R> {
    invoke(): R;
}
export declare class DelegateOneParam<P1, R = void> extends Delegate<(p1: P1) => R> {
    invoke(p1: P1): R;
}
export declare class DelegateTwoParams<P1, P2, R = void> extends Delegate<(p1: P1, p2: P2) => R> {
    invoke(p1: P1, p2: P2): R;
}
export declare class DelegateThreeParams<P1, P2, P3, R = void> extends Delegate<(p1: P1, p2: P2, p3: P3) => R> {
    invoke(p1: P1, p2: P2, p3: P3): R;
}
export declare class DelegateFourParams<P1, P2, P3, P4, R = void> extends Delegate<(p1: P1, p2: P2, p3: P3, p4: P4) => R> {
    invoke(p1: P1, p2: P2, p3: P3, p4: P4): R;
}
export declare class DelegateFiveParams<P1, P2, P3, P4, P5, R = void> extends Delegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5) => R> {
    invoke(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5): R;
}
export declare class DelegateSixParams<P1, P2, P3, P4, P5, P6, R = void> extends Delegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6) => R> {
    invoke(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6): R;
}
export declare class DelegateSevenParams<P1, P2, P3, P4, P5, P6, P7, R = void> extends Delegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7) => R> {
    invoke(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7): R;
}
export declare class DelegateEightParams<P1, P2, P3, P4, P5, P6, P7, P8, R = void> extends Delegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8) => R> {
    invoke(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8): R;
}
export declare class DelegateNineParams<P1, P2, P3, P4, P5, P6, P7, P8, P9, R = void> extends Delegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9) => R> {
    invoke(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9): R;
}
export declare class DelegateTenParams<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R = void> extends Delegate<(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9, p10: P10) => R> {
    invoke(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9, p10: P10): R;
}
//# sourceMappingURL=DelegateParam.d.ts.map