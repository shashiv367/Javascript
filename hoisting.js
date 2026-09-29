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
// has not executed yet

// ========================================
// JAVASCRIPT HOISTING - ALL EXAMPLES
// ========================================

console.log("===== 1. VAR HOISTING =====");

console.log(a); // undefined
var a = 10;

console.log(a); // 10


// ========================================

console.log("===== 2. FUNCTION HOISTING =====");

hello();

function hello() {
    console.log("Hello JavaScript");
}


// ========================================

console.log("===== 3. VAR INSIDE FUNCTION =====");

var x = 100;

function test() {
    console.log(x); // undefined

    var x = 200;

    console.log(x); // 200
}

test();

console.log(x); // 100


// ========================================

console.log("===== 4. FUNCTION EXPRESSION =====");

// hello2();
// This gives TypeError because hello2
// is undefined before assignment.

var hello2 = function () {
    console.log("Hello from function expression");
};

hello2();


// ========================================

console.log("===== 5. ARROW FUNCTION =====");

// greet();
// This gives TypeError if called before
// the assignment.

var greet = () => {
    console.log("Hello from arrow function");
};

greet();


// ========================================

console.log("===== 6. REDECLARATION =====");

var number = 10;

var number = 20;

console.log(number); // 20


// ========================================

console.log("===== 7. MULTIPLE VAR =====");

console.log(p); // undefined
console.log(q); // undefined

var p = 50;
var q = 60;

console.log(p); // 50
console.log(q); // 60


// ========================================

console.log("===== 8. NESTED FUNCTION =====");

var value = 10;

function outer() {

    console.log(value); // undefined

    var value = 20;

    function inner() {
        console.log(value); // 20
    }

    inner();
}

outer();


// ========================================

console.log("===== 9. FUNCTION DECLARATION =====");

start();

function start() {
    console.log("Function can be called before declaration");
}


// ========================================

console.log("===== 10. FINAL INTERVIEW EXAMPLE =====");

console.log(first); // undefined

var first = 100;

function demo() {

    console.log(first); // undefined

    var first = 200;

    console.log(first); // 200
}

demo();

console.log(first); // 100


// ========================================
// IMPORTANT RULES
// ========================================

/*

var
→ Hoisted
→ Initialized with undefined
→ Can be redeclared

let
→ Hoisted
→ Temporal Dead Zone (TDZ)
→ Cannot be redeclared in same scope

const
→ Hoisted
→ Temporal Dead Zone (TDZ)
→ Cannot be redeclared

function declaration
→ Hoisted completely
→ Can be called before declaration

function expression
→ Depends on var/let/const
→ Cannot normally be called before assignment

arrow function
→ Depends on var/let/const
→ Cannot normally be called before assignment

*/