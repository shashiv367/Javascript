function outer() {

    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();

// ==========================================
// JAVASCRIPT CLOSURES
// ==========================================


// Example 1: Basic Closure
// ==========================================

console.log("===== EXAMPLE 1 =====");

function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const result = outer();

result();

// Output:
// Hello


// ==========================================
// Example 2: Closure remembers a value
// ==========================================

console.log("===== EXAMPLE 2 =====");

function greet() {

    let name = "Hanumavathi";

    return function() {
        console.log("Hello " + name);
    };
}

const sayHello = greet();

sayHello();

// Output:
// Hello Hanumavathi


// ==========================================
// Example 3: Counter ⭐
// ==========================================

console.log("===== EXAMPLE 3 =====");

function counter() {

    let count = 0;

    return function() {

        count++;

        console.log(count);
    };
}

const increment = counter();

increment();
increment();
increment();

// Output:
// 1
// 2
// 3


// ==========================================
// Example 4: Two separate closures
// ==========================================

console.log("===== EXAMPLE 4 =====");

function createCounter() {

    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();

counter2();
counter2();

// Output:
// 1
// 2
// 1
// 2

// counter1 and counter2 have
// separate count variables.


// ==========================================
// Example 5: Private variable ⭐
// ==========================================

console.log("===== EXAMPLE 5 =====");

function bankAccount() {

    let balance = 1000;

    return {

        deposit: function(amount) {
            balance += amount;
            console.log("Balance:", balance);
        },

        withdraw: function(amount) {
            balance -= amount;
            console.log("Balance:", balance);
        }
    };
}

const account = bankAccount();

account.deposit(500);
account.withdraw(200);

// Output:
// Balance: 1500
// Balance: 1300

// balance cannot be directly accessed:
//
// console.log(balance); // Error


// ==========================================
// Example 6: Function with parameter
// ==========================================

console.log("===== EXAMPLE 6 =====");

function multiplyBy(number) {

    return function(value) {
        console.log(number * value);
    };
}

const multiplyByTwo = multiplyBy(2);

multiplyByTwo(5);
multiplyByTwo(10);

// Output:
// 10
// 20


// ==========================================
// Example 7: Closure with setTimeout
// ==========================================

console.log("===== EXAMPLE 7 =====");

function delayedMessage() {

    let message = "Hello after 2 seconds";

    setTimeout(function() {

        console.log(message);

    }, 2000);
}

delayedMessage();

// After 2 seconds:
// Hello after 2 seconds


// ==========================================
// Example 8: Closure inside loop
// ==========================================

console.log("===== EXAMPLE 8 =====");

function createFunctions() {

    let functions = [];

    for (let i = 1; i <= 3; i++) {

        functions.push(function() {
            console.log(i);
        });
    }

    return functions;
}

const functions = createFunctions();

functions[0]();
functions[1]();
functions[2]();

// Output:
// 1
// 2
// 3


// ==========================================
// Example 9: Message generator
// ==========================================

console.log("===== EXAMPLE 9 =====");

function createMessage(name) {

    return function(message) {

        console.log(name + ": " + message);

    };
}

const user1 = createMessage("Rahul");
const user2 = createMessage("Priya");

user1("Hello!");
user2("Good morning!");

// Output:
// Rahul: Hello!
// Priya: Good morning!


// ==========================================
// Example 10: Interview Example ⭐⭐⭐
// ==========================================

console.log("===== EXAMPLE 10 =====");

function outerFunction() {

    let x = 10;

    function innerFunction() {

        let y = 20;

        console.log(x + y);
    }

    return innerFunction;
}

const fn = outerFunction();

fn();

// Output:
// 30