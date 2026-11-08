let user = "alien"

function greet(u){ //u is called local variable

    let num = 5
    console.log(num);
    console.log(user); //user is called global variable
    return `Hello ${u}`    
    
}
//console.log(num); cannot access local variable
let str = greet(user)
console.log(str);

function add(n1,n2,n3=1){//n3 is local variable with default value
    console.log(n1,n2,n3);    
    return n1+n2+n3
}
let res = add(1,2,5)
console.log(res);

// arrow functions

let greet1 = function(user){
    console.log("Hello World "+user);
    return 1
}
console.log(greet1('long'));

let greet2 = (user1) => {
    console.log("Hello! "+user1);
    return 1
}
console.log(greet2('small'));

let sub = (a,b) => a-b
console.log(sub(2,1));

let mul = (c,d) =>{
    console.log("Multiplication");
    return c*d
}
console.log(mul(3,5));

let add2 = (num1,num2) =>{
    if(num1 < 0 || num2 < 0){
        console.log("Invalid Input");
    }
    else{
        return num1 + num2
    }
}
console.log(add2(2,8));

let square = num => num*num
console.log(square(9));

let EvenOrOdd = num3 => {
    if(num3 % 2 == 0){
        return  "Even"
    }else{
         return "Odd"
    }
}
console.log(EvenOrOdd(6));

let large = (x,y,z) =>{
    return x>y && x>z ? `${x} is largest` :
    y>x && y>z ? `${y} is largest` :
    `${z} is the largest`;     
}
console.log(large(7,6,9));

const numbers = [10,25,30,45,50,65]
let even = (numbers) =>{
    return numbers.filter(n => n% 2 == 0)
}
console.log(even(numbers));

let user = "alien"

function greet(u){ // u is called local variable

    let num = 5
    console.log(num);
    console.log(user); // user is called global variable
    return `Hello ${u}`    
    
}
// console.log(num); cannot access local variable
let str = greet(user)
console.log(str);

function add(n1,n2,n3=1){ // n3 is local variable with default value
    console.log(n1,n2,n3);    
    return n1+n2+n3
}
let res = add(1,2,5)
console.log(res);

// arrow functions

let greet1 = function(user){
    console.log("Hello World "+user);
    return 1
}
console.log(greet1('long'));

let greet2 = (user1) => {
    console.log("Hello! "+user1);
    return 1
}
console.log(greet2('small'));

let sub = (a,b) => a-b
console.log(sub(2,1));

let mul = (c,d) =>{
    console.log("Multiplication");
    return c*d
}
console.log(mul(3,5));

let add2 = (num1,num2) =>{
    if(num1 < 0 || num2 < 0){
        console.log("Invalid Input");
    }
    else{
        return num1 + num2
    }
}
console.log(add2(2,8));

let square = num => num*num
console.log(square(9));

let EvenOrOdd = num3 => {
    if(num3 % 2 == 0){
        return "Even"
    }else{
        return "Odd"
    }
}
console.log(EvenOrOdd(6));

let large = (x,y,z) =>{
    return x>y && x>z ? `${x} is largest` :
    y>x && y>z ? `${y} is largest` :
    `${z} is the largest`;     
}
console.log(large(7,6,9));

const numbers = [10,25,30,45,50,65]
let even = (numbers) =>{
    return numbers.filter(n => n% 2 == 0)
}
console.log(even(numbers));

// ==================== NEW EXTENSION CODE ====================

// 1. Array Transformations: map() and reduce() using Arrow Functions
let doubled = numbers.map(n => n * 2);
console.log(doubled);

let totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(totalSum);

// 2. Rest Parameter Function (Accepts any amount of numbers)
let sumAll = (...args) => args.reduce((acc, val) => acc + val, 0);
console.log(sumAll(5, 10, 15, 20));

// 3. Higher-Order Function & Callbacks
let processNumbers = (arr, callback) => {
    let result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}
console.log(processNumbers([1, 2, 3], num => num * 10));

// 4. Closure Example (Function returning another function)
let createCounter = () => {
    let count = 0; // Private variable retained via closure
    return () => {
        count++;
        return count;
    };
};
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 5. Immediately Invoked Function Expression (IIFE)
(() => {
    console.log("IIFE executed immediately upon script load!");
})();
