// ========================================
// JAVASCRIPT CALL STACK
// ========================================

console.log("Program Started");

function first() {
    console.log("Inside first()");
    second();
    console.log("Back to first()");
}

function second() {
    console.log("Inside second()");
    third();
    console.log("Back to second()");
}

function third() {
    console.log("Inside third()");
}

first();

console.log("Program Finished");


console.log("===== EXAMPLE 8: DEEP CALL STACK =====");

function A() {
    console.log("A");
}

function B() {
    console.log("B");
    A();
}

function C() {
    console.log("C");
    B();
}

C();


console.log("===== EXAMPLE 10 =====");

function start() {
    console.log("Start");
    middle();
    console.log("End");
}

function middle() {
    console.log("Middle Start");
    finish();
    console.log("Middle End");
}

function finish() {
    console.log("Finish");
}

start();

console.log("Program Complete");


console.log("===== EXAMPLE 9: RECURSION =====");

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(4));


// ========================================
// ADDITIONAL BRIEF CONCEPTS
// ========================================

console.log("===== EXAMPLE 11: MAXIMUM CALL STACK SIZE EXCEEDED (STACK OVERFLOW) =====");
// Infinite recursion pushes frames onto the stack without popping until memory limit is hit.
function blowStack() {
    // blowStack(); // Uncommenting this line will throw: RangeError: Maximum call stack size exceeded
}
blowStack();


console.log("===== EXAMPLE 12: ASYNCHRONOUS CALLBACKS (MACROTASK QUEUE) =====");
// Callbacks bypass immediate execution on the stack and wait until the stack clears.
console.log("1. Synchronous Start");

setTimeout(() => {
    console.log("3. Timeout Callback (Executes after Stack clears)");
}, 0);

console.log("2. Synchronous End");


console.log("===== EXAMPLE 13: PROMISES & MICROTASK QUEUE =====");
// Microtasks (Promises) run immediately after the current stack clears, BEFORE Macrotasks (setTimeout).
console.log("1. Stack Start");

setTimeout(() => console.log("4. Macrotask (setTimeout)"), 0);

Promise.resolve().then(() => console.log("3. Microtask (Promise)"));

console.log("2. Stack End");


console.log("===== EXAMPLE 14: INSPECTING CALL STACK VIA CONSOLE.TRACE() =====");
// console.trace() prints the exact snapshot of the execution stack at that frame.
function levelOne() {
    levelTwo();
}

function levelTwo() {
    console.trace("Current Call Stack Trace");
}

levelOne();
