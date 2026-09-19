let numbers = [1, 2, 3, 4, 5];

// map
let doubled = numbers.map(x => x * 2);
// [2, 4, 6, 8, 10]

// filter
let even = numbers.filter(x => x % 2 === 0);
// [2, 4]

// reduce
let sum = numbers.reduce((a, b) => a + b, 0);
// 15

// find
let result = numbers.find(x => x > 3);
// 4

// some
numbers.some(x => x > 4);
// true

// every
numbers.every(x => x > 0);
// true

let arr1 = [10, 20, 30];

let arr2 = new Array(10, 20, 30);

console.log(arr1);
console.log(arr2);

let arr = [10, 20, 30, 40];

console.log(arr[0]); // 10
console.log(arr[2]); // 30
console.log(arr[arr.length - 1]); // 40



let arr = [10, 20, 30];

arr[1] = 50;

console.log(arr);
// [10, 50, 30]