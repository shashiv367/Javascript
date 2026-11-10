let name = "viraj";

function greet() {
    console.log(name);
}

greet();
console.log(name);

function test() {
    let age = 21;

    console.log(age);
}

test();

console.log(age); // Error


if (true) {
    let x = 10;
    const y = 20;

    console.log(x);
    console.log(y);
}

console.log(x); // Error
console.log(y); // Error


var a = 10;
let b = 20;
const c = 30;

let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();

let x = 10;

function add(a, b) {
    let result = a + b;
    return result;
}

add(5, 3);

function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello");
}

first();

console.log(a);

var a = 10;

var a;

console.log(a);

a = 10;

hello();

function hello() {
    console.log("Hello");
}

// --- 1. Global & Function Scope ---
let name = "viraj";

function greet() {
    console.log(name); // Logs: viraj
}

greet();
console.log(name); // Logs: viraj

function test() {
    let age = 21;
    console.log(age); // Logs: 21
}

test();
// console.log(age); // ReferenceError: age is not defined


// --- 2. Block Scope (let & const) ---
if (true) {
    let x = 10;
    const y = 20;

    console.log(x); // Logs: 10
    console.log(y); // Logs: 20
}

// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined


// --- 3. Scope & Redeclaration ---
var a = 10;
let b = 20;
const c = 30;

// let a = 10; // SyntaxError: Identifier 'a' has already been declared


// --- 4. Lexical Scope & Scope Chain ---
let globalA = 10; // Renamed to prevent collision with 'a' above

function outer() {
    let outerB = 20;

    function inner() {
        let innerC = 30;

        console.log(globalA); // Logs: 10
        console.log(outerB);  // Logs: 20
        console.log(innerC);  // Logs: 30
    }

    inner();
}

outer();


// --- 5. Pure Functions & Return Values ---
let globalX = 10; // Renamed to prevent collision with block scope x above

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

add(5, 3);


// --- 6. Call Stack / Function Execution ---
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello"); // Logs: Hello
}

first();


// --- 7. Hoisting Behavior ---
// console.log(hoistedVar); // Logs: undefined (var declaration is hoisted)
var hoistedVar = 10;

var uninitVar;
console.log(uninitVar); // Logs: undefined
uninitVar = 10;

hello(); // Logs: Hello (Function declarations are fully hoisted)

function hello() {
    console.log("Hello");
}
