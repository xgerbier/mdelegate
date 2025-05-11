"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelegateTenParams = exports.DelegateNineParams = exports.DelegateEightParams = exports.DelegateSevenParams = exports.DelegateSixParams = exports.DelegateFiveParams = exports.DelegateFourParams = exports.DelegateThreeParams = exports.DelegateTwoParams = exports.DelegateOneParam = exports.DelegateNoParam = void 0;
const Delegate_1 = __importDefault(require("./Delegate"));
class DelegateNoParam extends Delegate_1.default {
    invoke() { return super.invoke(); }
}
exports.DelegateNoParam = DelegateNoParam;
class DelegateOneParam extends Delegate_1.default {
    invoke(p1) { return super.invoke(p1); }
}
exports.DelegateOneParam = DelegateOneParam;
class DelegateTwoParams extends Delegate_1.default {
    invoke(p1, p2) { return super.invoke(p1, p2); }
}
exports.DelegateTwoParams = DelegateTwoParams;
class DelegateThreeParams extends Delegate_1.default {
    invoke(p1, p2, p3) { return super.invoke(p1, p2, p3); }
}
exports.DelegateThreeParams = DelegateThreeParams;
class DelegateFourParams extends Delegate_1.default {
    invoke(p1, p2, p3, p4) { return super.invoke(p1, p2, p3, p4); }
}
exports.DelegateFourParams = DelegateFourParams;
class DelegateFiveParams extends Delegate_1.default {
    invoke(p1, p2, p3, p4, p5) { return super.invoke(p1, p2, p3, p4, p5); }
}
exports.DelegateFiveParams = DelegateFiveParams;
class DelegateSixParams extends Delegate_1.default {
    invoke(p1, p2, p3, p4, p5, p6) { return super.invoke(p1, p2, p3, p4, p5, p6); }
}
exports.DelegateSixParams = DelegateSixParams;
class DelegateSevenParams extends Delegate_1.default {
    invoke(p1, p2, p3, p4, p5, p6, p7) { return super.invoke(p1, p2, p3, p4, p5, p6, p7); }
}
exports.DelegateSevenParams = DelegateSevenParams;
class DelegateEightParams extends Delegate_1.default {
    invoke(p1, p2, p3, p4, p5, p6, p7, p8) { return super.invoke(p1, p2, p3, p4, p5, p6, p7, p8); }
}
exports.DelegateEightParams = DelegateEightParams;
class DelegateNineParams extends Delegate_1.default {
    invoke(p1, p2, p3, p4, p5, p6, p7, p8, p9) { return super.invoke(p1, p2, p3, p4, p5, p6, p7, p8, p9); }
}
exports.DelegateNineParams = DelegateNineParams;
class DelegateTenParams extends Delegate_1.default {
    invoke(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) { return super.invoke(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10); }
}
exports.DelegateTenParams = DelegateTenParams;
//# sourceMappingURL=DelegateParam.js.map