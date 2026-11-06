//Object creation 
function createStudent(name, age, course) {
    return {
        name: name,
        age: age,
        course: course
    };
}

let student11 = createStudent("Hanu", 20, "CSE");
let student22 = createStudent("Ravi", 21, "ECE");

console.log(student11);
console.log(student22);

//construction function 
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

let student1 = new Student("Hanu", 20, "CSE");
let student2 = new Student("Ravi", 21, "ECE");

console.log(student1);
console.log(student2);

function greet() {
    return "hello"
}
//arrow function
const greet1 = () => "hello"

function double(x){
    return x *2
}

const double = x => x*2

function add(a,b){
    return a+b
}

const add = (a,b) => a+b

const multiply = (a, b) => {
  return a * b;
};

const num = [1,2,3,4,6,8,9,10]
const evens = num.filter(n => n%2 === 0)

console.log(evens)

// ==========================================
// 1. Object Creation via Factory Functions
// ==========================================
function createStudent(name, age, course) {
    return {
        name: name,
        age: age,
        course: course
    };
}

const student11 = createStudent("Hanu", 20, "CSE");
const student22 = createStudent("Ravi", 21, "ECE");

console.log("--- Factory Function Objects ---");
console.log(student11);
console.log(student22);


// ==========================================
// 2. Constructor Functions
// ==========================================
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

const student1 = new Student("Hanu", 20, "CSE");
const student2 = new Student("Ravi", 21, "ECE");

console.log("\n--- Constructor Function Objects ---");
console.log(student1);
console.log(student2);


// ==========================================
// 3. Regular Functions vs. Arrow Functions
// ==========================================

// No parameters
function greet() {
    return "hello";
}
const greetArrow = () => "hello";

console.log("\n--- Greet ---");
console.log(greet());
console.log(greetArrow());


// Single parameter
function doubleNum(x) {
    return x * 2;
}
const doubleNumArrow = x => x * 2;

console.log("\n--- Double ---");
console.log(doubleNum(4));
console.log(doubleNumArrow(4));


// Multiple parameters
function addNum(a, b) {
    return a + b;
}
const addNumArrow = (a, b) => a + b;

console.log("\n--- Add ---");
console.log(addNum(5, 10));
console.log(addNumArrow(5, 10));


// Multi-line arrow function
const multiply = (a, b) => {
    return a * b;
};

console.log("\n--- Multiply ---");
console.log(multiply(3, 4));


// ==========================================
// 4. Array Methods with Arrow Functions
// ==========================================
const num = [1, 2, 3, 4, 6, 8, 9, 10];
const evens = num.filter(n => n % 2 === 0);

console.log("\n--- Filtered Even Numbers ---");
console.log(evens);

// ==========================================
// 5. ES6 Classes (Modern Constructor Style)
// ==========================================
class AdvancedStudent {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // Instance Method
    getDetails() {
        return `${this.name} is ${this.age} years old, studying ${this.course}.`;
    }
}

const student3 = new AdvancedStudent("Asha", 22, "AI & DS");

console.log("\n--- ES6 Classes ---");
console.log(student3.getDetails());


// ==========================================
// 6. Destructuring Objects & Arrays
// ==========================================
const user = { username: "Rahul", score: 95, location: "Delhi" };

// Object Destructuring
const { username, score } = user;
console.log("\n--- Destructuring ---");
console.log(`${username} scored ${score} points.`);

// Array Destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);


// ==========================================
// 7. Spread and Rest Operators (...)
// ==========================================
// Spread (Combining arrays/objects)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log("\n--- Spread Operator ---");
console.log(arr2);

// Rest (Gathering arguments)
function summarizeScores(name, ...scores) {
    const total = scores.reduce((acc, curr) => acc + curr, 0);
    return `${name} total score: ${total}`;
}
console.log(summarizeScores("Amit", 80, 90, 85));


// ==========================================
// 8. Advanced Array Methods (Map & Reduce)
// ==========================================
const numbers = [1, 2, 3, 4, 5];

// Map: Transform every element
const squared = numbers.map(n => n ** 2);
console.log("\n--- Array Map ---");
console.log(squared); // [1, 4, 9, 16, 25]

// Reduce: Accumulate values into a single result
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("\n--- Array Reduce ---");
console.log(sum); // 15
