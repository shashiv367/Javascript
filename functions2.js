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
