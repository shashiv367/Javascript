//defining function
function greet(){
    return "hello world" 
    //multiple return statements are not reachable
}
//calling function
greet()

let str = greet()
console.log(str)

function g1(user){
    return `varr ${user}` 
}
let user = "NNN"
let str1 = g1(user)
console.log(str1)

//expression
//expression --> Evaluate --> Assign


//function expression
let add = function(n1, n2){
            return n1+n2
        }
let res = add(4,5)
console.log(res)
console.log(add)


function greet1(){
    return "Hello, Welcome to JS"
}
let g2 = greet1()
console.log(g2)

function evenOrOdd(num){
    if(num % 2 == 0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}
evenOrOdd(4)

function largest(a,b,c){
    if(a>b && b>c){
        console.log(a)
    } else if(b>c && b>a){
        console.log(b)
    }else{
        console.log(c)
    }
}
largest(12,33,14)

function factorial(n){
    let res1 = 1
    for(let i = 1;i<=n;i++){
        res1 = res1 * i
    }
    return res1
}
console.log(factorial(8))

function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("howling"));

function reverse(str){
    let rev = ""
    for(let i=str.length - 1;i >= 0;i--){
        rev = rev+str[i]
    }
    return rev
}

console.log(reverse("Belloo"))

function palin(str){
    let rev = ""
    for(let i=str.length - 1;i >= 0;i--){
        rev = rev+str[i]
    }
    return str == rev
}
console.log(palin("madam"))

//Function with parameters 
function greet22l(name) {
  console.log("Hello " + name);
}

greet2("bello");

function createStudent(name, age, course) {
  return {
    name: name,
    age: age,
    course: course
  };
}

let student1 = createStudent("Hanu", 20, "CSE");

console.log(student1);