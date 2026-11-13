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

// ==========================================
// 1. Type Conversion and Coercion (Your Notes Fixed & Cleaned)
// ==========================================
let num = String(6);
console.log(num, typeof(num)); // "6" "string"

let n1 = Number("123");
console.log(n1, typeof(n1));   // 123 "number"

// Type Coercion: Automatic conversion based on the operator
let x;
console.log(x, typeof(x));     // undefined "undefined"

x = 5;
console.log(x, typeof(x));     // 5 "number"

x = x + "";
console.log(x, typeof(x));     // "5" "string" (Number + String = String)

x = x + 2;
console.log(x, typeof(x));     // "52" "string" (String + Number = String)

x = x - 2;
console.log(x, typeof(x));     // 50 "number" (Subtraction forces numeric conversion)

x = !x;
console.log(x, typeof(x));     // false "boolean" (50 is truthy, !50 becomes false)

// (Removed the incomplete 'x +' line from your snippet so the file runs without syntax errors)

// Boolean Conversions: Falsy vs. Truthy
// Only 6 values are falsy in JS: false, 0, "", null, undefined, NaN. Everything else is true.
console.log(Boolean(2));       // true
console.log(Boolean(-3));      // true
console.log(Boolean(0));       // false
console.log(Boolean(null));    // false
console.log(Boolean("Str"));   // true
console.log(Boolean(""));      // false (Empty string is falsy)
console.log(Boolean(" "));     // true (String with a space is truthy!)

// Failed Number Conversion
let x1 = Number("123 Str");
console.log(x1, typeof(x1));   // NaN "number"


// ==========================================
// 2. Advanced Type Coercion & Quirks
// ==========================================

// The Unary Plus Operator (+) for Explicit Conversion
console.log(+"42");            // 42 (Number)
console.log(+"hello");         // NaN
console.log(+true);            // 1
console.log(+false);           // 0
console.log(+null);            // 0
console.log(+undefined);       // NaN

// Addition vs. Other Arithmetic Operators
console.log("5" + 3);          // "53" (String concatenation)
console.log("5" - 3);          // 2 (Numeric subtraction)
console.log("5" * "2");        // 10 (Numeric multiplication)
console.log("10" / "2");       // 5 (Numeric division)

// Loose Equality (==) vs. Strict Equality (===)
console.log(5 == "5");         // true (Coerces "5" to 5)
console.log(5 === "5");        // false (Checks both value and type)
console.log(null == undefined);// true (Special JS rule)
console.log(null === undefined);// false

// Array and Object Coercion Quirks
console.log([] == 0);          // true ([] -> "" -> 0)
console.log([1] == 1);         // true ([1] -> "1" -> 1)
console.log([] + {});          // "[object Object]"


// ==========================================
// 3. NEXT TOPICS: Parsing, Logical Coercion & Edge Cases
// ==========================================

// A. parseInt() and parseFloat() vs Number()
// Number() fails if there are letters; parseInt() reads until it hits a non-number
console.log(Number("123px"));      // NaN
console.log(parseInt("123px"));    // 123
console.log(parseFloat("12.34em"));// 12.34
console.log(parseInt("px123"));    // NaN (Must start with a digit)

// B. Double NOT (!!) for Explicit Boolean Conversion
// A common shorthand used by developers instead of Boolean()
console.log(!!"hello");        // true
console.log(!!0);              // false
console.log(!!undefined);      // false

// C. Logical Operators (&& and ||) Return Values, Not Just Booleans!
// || (OR) returns the FIRST truthy value (or the last value if all are falsy)
console.log("" || "Default Name"); // "Default Name"
console.log("Alice" || "Guest");   // "Alice"

// && (AND) returns the FIRST falsy value (or the last value if all are truthy)
console.log(0 && "Won't reach here"); // 0
console.log("User" && "Logged In");   // "Logged In"

// D. Nullish Coalescing (??) - Fixing the '0' Coercion Bug
// || treats 0 as falsy, which can cause bugs with scores or prices. ?? only checks null/undefined.
let userScore = 0;
console.log(userScore || 100); // 100 (Bug! 0 was coerced to false)
console.log(userScore ?? 100); // 0   (Safe! 0 is neither null nor undefined)

// E. Classic Interview & Edge-Case Quirks
console.log(NaN === NaN);          // false (NaN is never equal to anything, even itself!)
console.log(Number.isNaN(NaN));    // true  (Proper way to check for NaN)
console.log(1 + 2 + "3");          // "33"  (Evaluates left-to-right: 1+2 = 3, then 3+"3" = "33")
console.log("1" + 2 + 3);          // "123" ("1"+2 = "12", then "12"+3 = "123")
console.log(true + true);          // 2     (1 + 1)
console.log(false - true);         // -1    (0 - 1)
console.log([] == ![]);            // true  (![] becomes false; [] coerces to 0; false coerces to 0)
