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