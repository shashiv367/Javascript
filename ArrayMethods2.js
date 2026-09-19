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