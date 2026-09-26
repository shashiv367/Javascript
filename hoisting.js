// ================================
// HOISTING + CALL STACK
// ================================

console.log("A:", number);

var number = 10;

console.log("B:", number);

function first() {
    console.log("Inside first()");
    second();
}

function second() {
    console.log("Inside second()");
    third();
}

function third() {
    console.log("Inside third()");
}

first();

console.log("Program finished");


// ================================
// OUTPUT
// ================================
//
// A: undefined
// B: 10
// Inside first()
// Inside second()
// Inside third()
// Program finished
//
// ================================


// CALL STACK:
//
// first()
//    ↓
// second()
//    ↓
// third()
//
// third() finishes → removed
// second() finishes → removed
// first() finishes → removed
//
// ================================


// HOISTING:
//
// Before execution, JavaScript
// processes:
//
// var number;
//
// function first() { ... }
// function second() { ... }
// function third() { ... }
//
// So this:
//
// console.log(number);
//
// works and gives:
//
// undefined
//
// because:
// var number;
// has been hoisted, but
// number = 10;
// has not executed yet.