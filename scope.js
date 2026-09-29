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