"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superseFloat = exports.superseInt = void 0;
function superseInt(value) {
    const parsedFloat = superseFloat(value);
    if (typeof parsedFloat === "number") {
        return Math.trunc(parsedFloat);
    }
    return BigInt(parsedFloat);
}
exports.superseInt = superseInt;
const EPSILON = Math.pow(2, -52);
function superseFloat(value) {
    if (typeof value === "number") {
        return value;
    }
    const isString = typeof value === "string";
    if (isString && isE(value)) {
        return parseE(value);
    }
    if (value === "Infinity") {
        return Number.POSITIVE_INFINITY;
    }
    if (value === "-Infinity") {
        return Number.NEGATIVE_INFINITY;
    }
    if (value === "NaN") {
        return Number.NaN;
    }
    if (isString && isSafeIntegerRange(value)) {
        if (hasDecimalPoint(value)) {
            return BigInt(value);
        }
        return BigInt(value);
    }
    if (isString) {
        return Number(value);
    }
    return Number.NaN;
}
exports.superseFloat = superseFloat;
function hasDecimalPoint(value) {
    return /\.\d+?$/.test(value);
}
function isSafeIntegerRange(value) {
    try {
        const normalized = value.replace(/\.\d+$/, "");
        return (BigInt(normalized) > BigInt(Number.MAX_SAFE_INTEGER) ||
            BigInt(normalized) < BigInt(Number.MIN_SAFE_INTEGER));
    }
    catch (e) {
        if (e instanceof Error && e.name === "SyntaxError") {
            return false;
        }
        throw e;
    }
}
function isE(value) {
    return /([\-\+]?\d)+[e|E]([\-\+]?\d)+/.test(value);
}
function parseE(value) {
    const [, m, n] = value.match(/([\-\+]?\d)+[e|E]([\-\+]?\d)+/) ?? [];
    if (typeof m === "undefined" || typeof n === "undefined") {
        return Number.NaN;
    }
    return Number(m) * 10 ** Number(n);
}
function isHex(value) {
    return /0[xX]\d+/.test(value);
}
function isOct(value) {
    return /0[oO]\d+/.test(value);
}
function isBinary(value) {
    return /0[bB]\d+/.test(value);
}
