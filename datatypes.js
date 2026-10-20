// Type Conversion and Coercion
let num = String(6)
console.log(num, typeof(num))

let n1 = Number("123")
console.log(n1, typeof(n1))

//type coercion
// Based on what type of datatype it will change according to it
let x 
console.log(x,typeof(x))
x = 5
console.log(x,typeof(x))
x = x+""
console.log(x,typeof(x))
x = x+2
console.log(x,typeof(x))
x = x-2
console.log(x,typeof(x))
x = !x
console.log(x,typeof(x))
x +

//Boolean values for all the numbers are true by default and 0 is false

console.log(Boolean(2))
console.log(Boolean(-3))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean("Str"))

let x1 = Number("123 Str")
console.log(x1)


// --- Advanced Type Coercion & Quirks ---

// 1. The Unary Plus Operator (+) for Explicit Conversion
console.log(+"42");        // 42 (Number)
console.log(+"hello");     // NaN (Not a Number, but typeof NaN is "number")
console.log(+true);        // 1
console.log(+false);       // 0
console.log(+null);        // 0
console.log(+undefined);   // NaN

// 2. Addition vs. Other Arithmetic Operators
console.log("5" + 3);      // "53" (String concatenation because of '+')
console.log("5" - 3);      // 2 (Converted to number for subtraction)
console.log("5" * "2");    // 10 (Converted to number for multiplication)
console.log("10" / "2");   // 5 (Converted to number for division)

// 3. Loose Equality (==) vs. Strict Equality (===)
console.log(5 == "5");     // true (Type coercion happens before comparison)
console.log(5 === "5");    // false (Strict check: different types)
console.log(null == undefined);  // true (Special rule in JavaScript)
console.log(null === undefined); // false

// 4. Array and Object Coercion Quirks
console.log([] == 0);      // true ([] converts to "" -> 0)
console.log([1] == 1);     // true ([1] converts to "1" -> 1)
console.log([] + {});      // "[object Object]"

