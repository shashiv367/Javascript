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
