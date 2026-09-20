let arr = [10, 20, 30];

arr.push(40);

console.log(arr);
// [10, 20, 30, 40]

arr.push(50, 60);

console.log(arr);
// [10, 20, 30, 40, 50, 60]

let arr = [10, 20, 30, 40];

let removed = arr.pop();

console.log(arr);
// [10, 20, 30]

console.log(removed);
// 40

let arr = [10, 20, 30, 40, 50];

arr.splice(2, 1);

console.log(arr);
// [10, 20, 40, 50]

let arr = [10, 20, 30, 40, 50];

let result = arr.slice(1, 4);

console.log(result);
// [20, 30, 40]

console.log(arr);
// [10, 20, 30, 40, 50]

let arr = [10, 20, 30, 40];

console.log(arr.includes(30));
// true

console.log(arr.includes(100));
// false

let arr = [10, 20, 30, 20, 40];

console.log(arr.lastIndexOf(20));
// 3
let names = ["Ravi", "Arun", "John"];

names.sort();

console.log(names);
// ["Arun", "John", "Ravi"]

let numbers = [10, 5, 100, 25];

numbers.sort();

console.log(numbers);
// [10, 100, 25, 5]

let numbers = [10, 5, 100, 25];

numbers.sort((a, b) => a - b);

console.log(numbers);
// [5, 10, 25, 100]

let arr = [10, 20, 30, 40];

arr.reverse();

console.log(arr);
// [40, 30, 20, 10]

let arr = ["Java", "JavaScript", "Python"];

let result = arr.join(", ");

console.log(result);
// Java, JavaScript, Python

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = arr1.concat(arr2);

console.log(result);
// [1, 2, 3, 4, 5, 6]

let arr = [1, 2, [3, 4], [5, 6]];

console.log(arr.flat());

// [1, 2, 3, 4, 5, 6]

let numbers = [10, 20, 30, 40];

numbers.forEach(x => {
    console.log(x);
});

let numbers = [10, 20, 30, 40];

let index = numbers.findIndex(x => x > 25);

console.log(index);
// 2

let students = [
    { name: "Ravi", marks: 80 },
    { name: "Arun", marks: 45 },
    { name: "John", marks: 90 }
];

let passed = students.filter(student => student.marks >= 50);

console.log(passed);

let students = [
    { name: "Ravi", marks: 80 },
    { name: "Arun", marks: 45 },
    { name: "John", marks: 90 }
];

let names = students.map(student => student.name);

console.log(names);

// ["Ravi", "Arun", "John"]

let students = [
    { name: "Ravi", marks: 80 },
    { name: "Arun", marks: 45 },
    { name: "John", marks: 90 }
];

let total = students.reduce((sum, student) => {
    return sum + student.marks;
}, 0);

console.log(total);
// 215

let numbers = [10, 50, 20, 80, 30];

let max = numbers.reduce((a, b) => {
    return a > b ? a : b;
});

console.log(max);
// 80