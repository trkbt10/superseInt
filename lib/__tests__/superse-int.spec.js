"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const superse_int_1 = require("../src/superse-int");
describe("superse-int", () => {
    it("0.5 => 0", () => {
        expect((0, superse_int_1.superseInt)(0.5)).toBe(0);
    });
    it("0.00000000005 => 0", () => {
        expect((0, superse_int_1.superseInt)(0.00000000005)).toBe(0);
    });
    it("5e-7 => 0", () => {
        expect((0, superse_int_1.superseInt)("5e-7")).toBe(0);
    });
    it("0xed => 237", () => {
        expect((0, superse_int_1.superseInt)("0xed")).toBe(237);
    });
    it("0X123456789ABCDEF => 81985529216486895n", () => {
        expect((0, superse_int_1.superseInt)("0X123456789ABCDEF")).toBe(81985529216486895n);
    });
    it("0o644 => 420", () => {
        expect((0, superse_int_1.superseInt)("0o644")).toBe(420);
    });
    it("NaN => NaN", () => {
        expect(Number.isNaN((0, superse_int_1.superseInt)("NaN"))).toBe(true);
        expect(Number.isNaN((0, superse_int_1.superseInt)(Number.NaN))).toBe(true);
    });
    it("Infinity => Infinity", () => {
        expect((0, superse_int_1.superseInt)(Number.POSITIVE_INFINITY)).toBe(Number.POSITIVE_INFINITY);
        expect((0, superse_int_1.superseInt)(Number.POSITIVE_INFINITY.toString())).toBe(Number.POSITIVE_INFINITY);
        expect((0, superse_int_1.superseInt)(Number.NEGATIVE_INFINITY)).toBe(Number.NEGATIVE_INFINITY);
        expect((0, superse_int_1.superseInt)(Number.NEGATIVE_INFINITY.toString())).toBe(Number.NEGATIVE_INFINITY);
    });
    it("MaxSafeInteger + 1 => BigInt", () => {
        expect((0, superse_int_1.superseInt)(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
        expect((0, superse_int_1.superseInt)("9007199254740992")).toBe(9007199254740992n);
    });
    it("MinSafeInteger - 1 => BigInt", () => {
        expect((0, superse_int_1.superseInt)(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER);
        expect((0, superse_int_1.superseInt)("-9007199254740992")).toBe(-9007199254740992n);
    });
});
