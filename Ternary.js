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

// ==========================================
// 1. IF-ELSE vs TERNARY OPERATOR
// ==========================================

// Without Ternary operator
let num = 5
let res

if (num % 2 === 0)
    res = "Even"
else
    res = "Odd"

console.log(res)

// With Ternary Operator
res = num % 2 === 0 ? "Even" : "Odd" 
console.log(res)

let marks = 20
let grade = marks >= 35 ? "Pass" : "Fail"
console.log(grade)


// ==========================================
// 2. IF-ELSE-IF vs SWITCH CASE
// ==========================================

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

switch (day2) {
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


// ==========================================
// 3. NESTED TERNARY & SWITCH EXAMPLES
// ==========================================

// Nested Ternary operator
let num2 = -12
let sign = num2 > 0 
    ? "Positive" : num2 < 0 
        ? "Negative" : "Zero"

console.log(sign)

let a = 33
let b = 24
let c = 30

let res2 = (a > b && a > c) ? a
    : (b > c && b > a) ? b : c 

console.log(res2)

// Switch matching numbers
let num3 = 2

switch (num3) {
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


// ==========================================
// 4. LOOPS (FOR, WHILE, DO-WHILE, BREAK/CONTINUE)
// ==========================================

// For Loop
console.log("--- For Loop ---")
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i)
}

// While Loop
console.log("--- While Loop ---")
let count = 3
while (count > 0) {
    console.log("Countdown:", count)
    count--
}
console.log("Lift off!")

// Do...While Loop
console.log("--- Do...While Loop ---")
let x = 1
do {
    console.log("This runs at least once. Value:", x)
    x++
} while (x <= 3)

// Loop Control: break & continue
console.log("--- Break Example ---")
for (let i = 1; i <= 5; i++) {
    if (i === 3) break
    console.log(i)
}

console.log("--- Continue Example ---")
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue
    console.log(i)
}
