
import Delegate, { IDelegate } from "./Delegate";

export interface	IDelegateNoParam		< 											R = void>	extends IDelegate<(																								) => R> { }
export interface	IDelegateOneParam		<P1, 										R = void>	extends IDelegate<(p1 : P1																						) => R> { }
export interface	IDelegateTwoParams		<P1, P2, 									R = void>	extends IDelegate<(p1 : P1, p2 : P2																				) => R> { }
export interface	IDelegateThreeParams	<P1, P2, P3, 								R = void>	extends IDelegate<(p1 : P1, p2 : P2, p3 : P3																	) => R> { }
export interface	IDelegateFourParams		<P1, P2, P3, P4, 							R = void>	extends IDelegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4															) => R> { }
export interface	IDelegateFiveParams		<P1, P2, P3, P4, P5, 						R = void>	extends IDelegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5													) => R> { }
export interface	IDelegateSixParams		<P1, P2, P3, P4, P5, P6, 					R = void>	extends IDelegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6											) => R> { }
export interface	IDelegateSevenParams	<P1, P2, P3, P4, P5, P6, P7, 				R = void>	extends IDelegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7								) => R> { }
export interface	IDelegateEightParams	<P1, P2, P3, P4, P5, P6, P7, P8, 			R = void>	extends IDelegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7, p8 : P8						) => R> { }
export interface	IDelegateNineParams		<P1, P2, P3, P4, P5, P6, P7, P8, P9, 		R = void>	extends IDelegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7, p8 : P8, p9 : P9				) => R> { }
export interface	IDelegateTenParams		<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, 	R = void>	extends IDelegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7, p8 : P8, p9 : P9, p10 : P10	) => R> { }

export class		DelegateNoParam			<	 										R = void>	extends Delegate<(																								) => R>	{ public invoke(																								) : R { return super.invoke(											); } }
export class		DelegateOneParam		<P1, 										R = void>	extends Delegate<(p1 : P1																						) => R>	{ public invoke(p1 : P1																							) : R { return super.invoke(p1											); } }
export class		DelegateTwoParams		<P1, P2, 									R = void>	extends Delegate<(p1 : P1, p2 : P2																				) => R>	{ public invoke(p1 : P1, p2 : P2																				) : R { return super.invoke(p1, p2										); } }
export class		DelegateThreeParams		<P1, P2, P3, 								R = void>	extends Delegate<(p1 : P1, p2 : P2, p3 : P3																		) => R>	{ public invoke(p1 : P1, p2 : P2, p3 : P3																		) : R { return super.invoke(p1, p2, p3									); } }
export class		DelegateFourParams		<P1, P2, P3, P4, 							R = void>	extends Delegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4															) => R>	{ public invoke(p1 : P1, p2 : P2, p3 : P3, p4 : P4																) : R { return super.invoke(p1, p2, p3, p4								); } }
export class		DelegateFiveParams		<P1, P2, P3, P4, P5, 						R = void>	extends Delegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5													) => R>	{ public invoke(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5														) : R { return super.invoke(p1, p2, p3, p4, p5							); } }
export class		DelegateSixParams		<P1, P2, P3, P4, P5, P6, 					R = void>	extends Delegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6											) => R>	{ public invoke(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6											) : R { return super.invoke(p1, p2, p3, p4, p5, p6						); } }
export class		DelegateSevenParams		<P1, P2, P3, P4, P5, P6, P7, 				R = void>	extends Delegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7									) => R>	{ public invoke(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7									) : R { return super.invoke(p1, p2, p3, p4, p5, p6, p7					); } }
export class		DelegateEightParams		<P1, P2, P3, P4, P5, P6, P7, P8, 			R = void>	extends Delegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7, p8 : P8						) => R>	{ public invoke(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7, p8 : P8							) : R { return super.invoke(p1, p2, p3, p4, p5, p6, p7, p8				); } }
export class		DelegateNineParams		<P1, P2, P3, P4, P5, P6, P7, P8, P9, 		R = void>	extends Delegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7, p8 : P8, p9 : P9				) => R>	{ public invoke(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7, p8 : P8, p9 : P9					) : R { return super.invoke(p1, p2, p3, p4, p5, p6, p7, p8, p9			); } }
export class		DelegateTenParams		<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, 	R = void>	extends Delegate<(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7, p8 : P8, p9 : P9, p10 : P10	) => R>	{ public invoke(p1 : P1, p2 : P2, p3 : P3, p4 : P4, p5 : P5, p6 : P6, p7 : P7, p8 : P8, p9 : P9, p10 : P10		) : R { return super.invoke(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10		); } }
