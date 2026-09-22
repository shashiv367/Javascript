let arr = [10, 20, 30];

arr.push(40);

console.log(arr);
// [10, 20, 30, 40]

arr.push(50, 60);

console.log(arr);
// [10, 20, 30, 40, 50, 60]

let arr2 = [10, 20, 30, 40];

let removed = arr2.pop();

console.log(arr2);
// [10, 20, 30]

console.log(removed);
// 40

let arr3 = [10, 20, 30, 40, 50];

arr3.splice(2, 1);

console.log(arr3);
// [10, 20, 40, 50]

let arr4 = [10, 20, 30, 40, 50];

let result = arr4.slice(1, 4);

console.log(result);
// [20, 30, 40]

console.log(arr4);
// [10, 20, 30, 40, 50]

let arr5 = [10, 20, 30, 40];

console.log(arr5.includes(30));
// true

console.log(arr.includes(100));
// false

let arr6 = [10, 20, 30, 20, 40];

console.log(arr6.lastIndexOf(20));
// 3
let names = ["Ravi", "Arun", "John"];

names.sort();

console.log(names);
// ["Arun", "John", "Ravi"]

let numbers = [10, 5, 100, 25];

numbers.sort();

console.log(numbers);
// [10, 100, 25, 5]

let numbers1 = [10, 5, 100, 25];

numbers1.sort((a, b) => a - b);

console.log(numbers1);
// [5, 10, 25, 100]

let arr7 = [10, 20, 30, 40];

arr7.reverse();

console.log(arr7);
// [40, 30, 20, 10]

let arr8 = ["Java", "JavaScript", "Python"];

let result1 = arr8.join(", ");

console.log(result);
// Java, JavaScript, Python

let arr11 = [1, 2, 3];
let arr22 = [4, 5, 6];

let result2 = arr1.concat(arr2);

console.log(result);
// [1, 2, 3, 4, 5, 6]

let arr9 = [1, 2, [3, 4], [5, 6]];

console.log(arr9.flat());

// [1, 2, 3, 4, 5, 6]

let numbers2 = [10, 20, 30, 40];

numbers2.forEach(x => {
    console.log(x);
});

let numbers3 = [10, 20, 30, 40];

let index = numbers3.findIndex(x => x > 25);

console.log(index);
// 2

let students1 = [
    { name: "Ravi", marks: 80 },
    { name: "Arun", marks: 45 },
    { name: "John", marks: 90 }
];

let passed = students1.filter(student => student.marks >= 50);

console.log(passed);

let students2 = [
    { name: "Ravi", marks: 80 },
    { name: "Arun", marks: 45 },
    { name: "John", marks: 90 }
];

let names1 = students.map(student => student.name);

console.log(names1);

// ["Ravi", "Arun", "John"]

let students3 = [
    { name: "Ravi", marks: 80 },
    { name: "Arun", marks: 45 },
    { name: "John", marks: 90 }
];

let total = students3.reduce((sum, student) => {
    return sum + student.marks;
}, 0);

console.log(total);
// 215

let numbers4 = [10, 50, 20, 80, 30];

let max = numbers4.reduce((a, b) => {
    return a > b ? a : b;
});

console.log(max);
// 80


let arr33 = [2,3,4];

console.log(arr33.slice(0));