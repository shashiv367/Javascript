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

// Without switch
let day = 3

if (day === 1)
    console.log("Monday")
else if (day === 2)
    console.log("Tuesday")
else if (day === 3)
    console.log("Wednesday")
else if (day === 4)
    console.log("Thursday")
else
    console.log("Invalid day")


// With switch
let day2 = 3

switch(day2) {
    case 1:
        console.log("Monday")
        break

    case 2:
        console.log("Tuesday")
        break

    case 3:
        console.log("Wednesday")
        break

    case 4:
        console.log("Thursday")
        break

    default:
        console.log("Invalid day")
}
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


let num = 2

switch(num) {
    case 1:
        console.log("One")
        break

    case 2:
        console.log("Two")
        break

    case 3:
        console.log("Three")
        break
}