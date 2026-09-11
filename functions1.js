//Object creation 
function createStudent(name, age, course) {
    return {
        name: name,
        age: age,
        course: course
    };
}

let student1 = createStudent("Hanu", 20, "CSE");
let student2 = createStudent("Ravi", 21, "ECE");

console.log(student1);
console.log(student2);

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