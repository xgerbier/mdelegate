"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Delegate {
    // ------------------------------
    //  Constructor(s)
    // ------------------------------
    constructor() {
        // ------------------------------
        //  Data members
        // ------------------------------
        this.callbacks = new Set();
    }
    // ------------------------------
    //  Methods
    // ------------------------------
    add(callback) {
        this.callbacks.add(callback);
    }
    remove(callback) {
        this.callbacks.delete(callback);
    }
    invoke(...args) {
        let result;
        this.callbacks.forEach(callback => {
            result = callback(...args);
        });
        return result;
    }
}
exports.default = Delegate;
//# sourceMappingURL=Delegate.js.map