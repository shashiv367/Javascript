// ============================================================================
// COMPREHENSIVE JAVASCRIPT LOOPS GUIDE
// ============================================================================

// ----------------------------------------------------------------------------
// 1. WHILE LOOP (Pre-test Loop)
// Evaluates condition FIRST before running the block.
// ----------------------------------------------------------------------------
console.log("--- 1. WHILE LOOP EXAMPLES ---");

// Incrementing Example
let countUp = 1;
while (countUp <= 5) {
    console.log("Count up:", countUp);
    countUp++;
}

// Decrementing Example
let countDown = 5;
while (countDown >= 0) {
    console.log("Count down:", countDown);
    countDown--;
}

// Practical Example: Processing until a condition changes
let userBalance = 100;
let itemCost = 30;
let itemsBought = 0;

while (userBalance >= itemCost) {
    userBalance -= itemCost;
    itemsBought++;
    console.log(`Bought item ${itemsBought}. Remaining balance: $${userBalance}`);
}


// ----------------------------------------------------------------------------
// 2. DO...WHILE LOOP (Post-test Loop)
// Runs the block AT LEAST ONCE before checking the condition.
// ----------------------------------------------------------------------------
console.log("\n--- 2. DO...WHILE LOOP EXAMPLES ---");

// Runs once even though initial condition fails (9 <= 5 is false)
let doVal = 9;
do {
    console.log("Runs at least once despite false condition. Value:", doVal);
    doVal++;
} while (doVal <= 5);

// Practical Example: Interactive prompt / retry logic simulation
let attempts = 0;
let success = false;

do {
    attempts++;
    console.log(`Attempt #${attempts} connecting to server...`);
    
    // Simulate success on 3rd attempt
    if (attempts === 3) {
        success = true;
        console.log("Connection established!");
    }
} while (!success && attempts < 5);


// ----------------------------------------------------------------------------
// 3. FOR LOOP (Standard Counter Loop)
// Syntax: for (Initialization; Condition; Increment/Decrement)
// ----------------------------------------------------------------------------
console.log("\n--- 3. FOR LOOP EXAMPLES ---");

// Basic: Print 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log("Number:", i);
}

// Sum of numbers 1 to 100
let totalSum = 0;
for (let i = 1; i <= 100; i++) {
    totalSum += i;
}
console.log("Sum from 1 to 100:", totalSum);

// Multiplication Table (e.g., 9s table)
let numToMultiply = 9;
for (let i = 1; i <= 10; i++) {
    console.log(`${numToMultiply} * ${i} = ${numToMultiply * i}`);
}

// Finding Prime Numbers (from 2 to 30)
console.log("Prime numbers up to 30:");
for (let num = 2; num <= 30; num++) {
    let isPrime = true;

    // Check divisors up to square root of num for efficiency
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}


// ----------------------------------------------------------------------------
// 4. NESTED LOOPS
// Loops inside loops (commonly used for 2D arrays, matrices, and patterns).
// ----------------------------------------------------------------------------
console.log("\n--- 4. NESTED LOOP EXAMPLES ---");

// Right-angled triangle pattern
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Iterating a 2D Array (Matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
        console.log(`Element at [${r}][${c}]:`, matrix[r][c]);
    }
}


// ----------------------------------------------------------------------------
// 5. LOOP CONTROL STATEMENTS: BREAK AND CONTINUE
// - break: Exits the loop entirely.
// - continue: Skips the current iteration and jumps to the next one.
// ----------------------------------------------------------------------------
console.log("\n--- 5. BREAK & CONTINUE EXAMPLES ---");

// 'continue' example: Print only odd numbers
console.log("Odd numbers from 1 to 10 using continue:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i);
}

// 'break' example: Search for a specific target
const scores = [45, 67, 89, 92, 78];
const targetScore = 92;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === targetScore) {
        console.log(`Found target score ${targetScore} at index ${i}!`);
        break; // Stop searching once found
    }
}


// ----------------------------------------------------------------------------
// 6. FOR...OF LOOP (Iterating over Iterable Objects)
// Ideal for Arrays, Strings, Sets, and Maps. Works with values directly.
// ----------------------------------------------------------------------------
console.log("\n--- 6. FOR...OF LOOP EXAMPLES ---");

const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}

// Iterating over a String
const word = "JavaScript";
for (const char of word) {
    console.log("Char:", char);
}

// Iterating over Array with Index using entries()
for (const [index, fruit] of fruits.entries()) {
    console.log(`Index ${index}: ${fruit}`);
}


// ----------------------------------------------------------------------------
// 7. FOR...IN LOOP (Iterating over Object Properties)
// Iterates over keys/property names of an object or indices of an array.
// ----------------------------------------------------------------------------
console.log("\n--- 7. FOR...IN LOOP EXAMPLES ---");

const student = {
    name: "Alex",
    age: 21,
    major: "Computer Science",
    gpa: 3.8
};

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}


// ----------------------------------------------------------------------------
// 8. HIGHER-ORDER ARRAY ITERATION METHODS
// Functional alternatives to traditional loops for processing array data.
// ----------------------------------------------------------------------------
console.log("\n--- 8. ARRAY ITERATION METHODS ---");

const numbers = [1, 2, 3, 4, 5];

// forEach: Runs a callback function for every element
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map: Transforms each element and returns a new array
const squared = numbers.map(num => num ** 2);
console.log("Squared Array:", squared);

// filter: Filters elements based on a condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// reduce: Accumulates array values into a single output
const arraySum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum via reduce():", arraySum);


// ----------------------------------------------------------------------------
// 9. LABELED STATEMENTS WITH LOOPS
// Allows break or continue to target an outer loop directly.
// ----------------------------------------------------------------------------
console.log("\n--- 9. LABELED LOOPS EXAMPLE ---");

outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking out of outerLoop directly...");
            break outerLoop; // Exits outer loop, not just inner loop
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
