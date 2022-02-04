import { superseInt } from "../src/superse-int";
describe("superse-int", () => {
  it("0.5 => 0", () => {
    expect(superseInt(0.5)).toBe(0);
  });
  it("0.00000000005 => 0", () => {
    expect(superseInt(0.00000000005)).toBe(0);
  });
  it("5e-7 => 0", () => {
    expect(superseInt("5e-7")).toBe(0);
  });
  it("0xed => 237", () => {
    expect(superseInt("0xed")).toBe(237);
  });
  it("0X123456789ABCDEF => 81985529216486895n", () => {
    expect(superseInt("0X123456789ABCDEF")).toBe(81985529216486895n);
  });
  it("0o644 => 420", () => {
    expect(superseInt("0o644")).toBe(420);
  });
  it("NaN => NaN", () => {
    expect(Number.isNaN(superseInt("NaN"))).toBe(true);
    expect(Number.isNaN(superseInt(Number.NaN))).toBe(true);
  });
  it("Infinity => Infinity", () => {
    expect(superseInt(Number.POSITIVE_INFINITY)).toBe(Number.POSITIVE_INFINITY);
    expect(superseInt(Number.POSITIVE_INFINITY.toString())).toBe(
      Number.POSITIVE_INFINITY
    );
    expect(superseInt(Number.NEGATIVE_INFINITY)).toBe(Number.NEGATIVE_INFINITY);
    expect(superseInt(Number.NEGATIVE_INFINITY.toString())).toBe(
      Number.NEGATIVE_INFINITY
    );
  });
  it("MaxSafeInteger + 1 => BigInt", () => {
    expect(superseInt(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
    expect(superseInt("9007199254740992")).toBe(9007199254740992n);
  });
  it("MinSafeInteger - 1 => BigInt", () => {
    expect(superseInt(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER);
    expect(superseInt("-9007199254740992")).toBe(-9007199254740992n);
  });
});
