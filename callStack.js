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



console.log("===== EXAMPLE 9 =====");

function factorial(n) {

    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(4));