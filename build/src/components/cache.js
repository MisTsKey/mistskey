"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
class Cache extends Map {
    constructor() {
        super();
        this.Cache = new Map();
    }
    set(key, value) {
        this.Cache.set(key, value);
        return this;
    }
}
exports.Cache = Cache;
