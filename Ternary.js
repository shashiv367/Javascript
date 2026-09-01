//Without Ternary operator
let num = 5
let res

if(num%2===0)
    res = "Even"
else
    res = "Odd"

console.log(res)

//With Ternary Operator

res = num%2 === 0 ? "Even" : "Odd" 
console.log(res)

let marks = 20
let grade

grade = marks >= 35 ? "Pass" : "Fail"

console.log(grade)

// Nested Ternary operator
let num2 = -12
let sign = num2 > 0 
    ? "Positive" : num2 < 0 
        ? "Negative" : "Zero"

console.log(sign)

let a = 33
let b = 24
let c = 30

let res2 = (a>b && a>c) ? a
    : (b>c && b>a) ? b  : c 

console.log(res2)