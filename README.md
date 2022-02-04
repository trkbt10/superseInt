# superseint

superseInt is a function like parseInt.  
It can be used in the same way as parseInt, perhaps even better.

## Sample

```
// 0.5 => 0
superseInt(0.5) // 0

// 0.00000000005 => 0
superseInt(0.00000000005) // 0

// 5e-7 => 0
superseInt("5e-7") // 0

// NaN => NaN
Number.isNaN(superseInt("NaN")) // true
Number.isNaN(superseInt(Number.NaN)) // true

// Infinity => Infinity
superseInt(Number.POSITIVE_INFINITY) // +Infinity
superseInt(Number.POSITIVE_INFINITY.toString()) //  +Infinity

// -Infinity => -Infinity
superseInt(Number.NEGATIVE_INFINITY) // -Infinity
superseInt(Number.NEGATIVE_INFINITY) // -Infinity

// MaxSafeInteger + 1 => BigInt
superseInt(Number.MAX_SAFE_INTEGER) // 9007199254740991
superseInt("9007199254740992") // 9007199254740992n

// MinSafeInteger - 1 => BigInt
superseInt(Number.MIN_SAFE_INTEGER) // -9007199254740991
superseInt("-9007199254740992") // -9007199254740992n

// hex
superseInt("0xed") // 237
superseInt("0X123456789ABCDEF") // 81985529216486895n

```
