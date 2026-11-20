// ==========================================
// 1. ARRAY CREATION & ACCESS (Your Original Code)
// ==========================================

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

let arr3 = [10, 20, 30, 40];

console.log(arr3[0]); // 10
console.log(arr3[2]); // 30
console.log(arr3[arr3.length - 1]); // 40

let arr = [10, 20, 30];
arr[1] = 50;

console.log(arr);
// [10, 50, 30]


// ==========================================
// 2. MODIFYING ARRAYS (Push, Pop, Shift, Unshift, Splice)
// ==========================================

let items = [20, 30];

// push: Add to the end
items.push(40);
console.log(items); // [20, 30, 40]

// unshift: Add to the beginning
items.unshift(10);
console.log(items); // [10, 20, 30, 40]

// pop: Remove from the end
let last = items.pop();
console.log(last);  // 40
console.log(items); // [10, 20, 30]

// shift: Remove from the beginning
let first = items.shift();
console.log(first); // 10
console.log(items); // [20, 30]

// splice: Add/Remove elements at any position -> splice(startIndex, deleteCount, item1, item2...)
let fruits = ["apple", "banana", "mango"];
fruits.splice(1, 1, "orange"); // Remove 1 element at index 1 and insert "orange"
console.log(fruits); // ["apple", "orange", "mango"]


// ==========================================
// 3. SEARCHING & UTILITIES (includes, indexOf, slice, concat, flat)
// ==========================================

let tags = ["js", "python", "java", "cpp"];

// includes: Check if an element exists
console.log(tags.includes("js")); // true

// indexOf: Get index of an element (-1 if not found)
console.log(tags.indexOf("java")); // 2

// slice: Extract a section without modifying original -> slice(start, end)
let subTags = tags.slice(1, 3);
console.log(subTags); // ["python", "java"]

// concat / Spread operator: Merge arrays
let extraTags = ["go", "rust"];
let merged = [...tags, ...extraTags];
console.log(merged); // ["js", "python", "java", "cpp", "go", "rust"]

// flat: Flatten nested arrays
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]


// ==========================================
// 4. SORTING & REVERSING
// ==========================================

let unsorted = [40, 10, 100, 5, 25];

// sort: Sorts alphabetically by default, use a comparator for numbers
unsorted.sort((a, b) => a - b); // Ascending order
console.log(unsorted); // [5, 10, 25, 40, 100]

// reverse: Reverses array in place
unsorted.reverse();
console.log(unsorted); // [100, 40, 25, 10, 5]


// ==========================================
// 5. DESTRUCTURING & ITERATION
// ==========================================

let colors = ["red", "green", "blue"];

// Array Destructuring
let [primary, secondary] = colors;
console.log(primary);   // "red"
console.log(secondary); // "green"

// forEach: Execute a function on each element
colors.forEach((color, index) => {
  console.log(`${index}: ${color}`);
});

// for...of loop
for (let color of colors) {
  console.log(color);
}

// ==========================================
// 6. MODERN ACCESS & FINDING (at, findIndex, findLast, flatMap)
// ==========================================

let scores = [12, 45, 78, 34, 90, 23];

// at: Supports negative indexing cleanly (unlike bracket notation)
console.log(scores.at(0));  // 12
console.log(scores.at(-1)); // 23 (last element)
console.log(scores.at(-2)); // 90 (second to last)

// findIndex: Returns index of first matching element (-1 if not found)
let firstHighIndex = scores.findIndex(score => score > 50);
console.log(firstHighIndex); // 2

// findLast & findLastIndex: Search from the end of the array
let lastHigh = scores.findLast(score => score > 50);
let lastHighIndex = scores.findLastIndex(score => score > 50);
console.log(lastHigh, lastHighIndex); // 90, 4

// flatMap: Maps each element then flattens one level deep
let sentences = ["hello world", "js arrays"];
let words = sentences.flatMap(sentence => sentence.split(" "));
console.log(words); // ["hello", "world", "js", "arrays"]


// ==========================================
// 7. NON-MUTATING METHODS & ARRAY BUILDERS (ES2023+ & Static)
// ==========================================

let original = [30, 10, 20];

// toSorted: Returns a new sorted array without mutating original
let sortedCopy = original.toSorted((a, b) => a - b);
console.log(sortedCopy); // [10, 20, 30]
console.log(original);   // [30, 10, 20]

// toReversed: Returns a new reversed array without mutating original
let reversedCopy = original.toReversed();
console.log(reversedCopy); // [20, 10, 30]
console.log(original);     // [30, 10, 20]

// toSpliced: Non-mutating version of splice
let splicedCopy = original.toSpliced(1, 1, 99);
console.log(splicedCopy); // [30, 99, 20]
console.log(original);    // [30, 10, 20]

// with: Non-mutating replacement at a given index
let replacedCopy = original.with(0, 100);
console.log(replacedCopy); // [100, 10, 20]
console.log(original);     // [30, 10, 20]

// Array.from & Array.of: Create arrays from iterables, strings, or generators
let chars = Array.from("ABC");
let range = Array.from({ length: 5 }, (_, i) => (i + 1) * 10);
let singleNum = Array.of(7); // [7] (unlike new Array(7) which creates 7 empty slots)
console.log(chars, range, singleNum); // ["A", "B", "C"], [10, 20, 30, 40, 50], [7]


// ==========================================
// 8. PRACTICAL PATTERNS (Deduplicating, Grouping, Chaining)
// ==========================================

// Remove duplicates using Set and spread
let rawTags = ["js", "react", "js", "node", "react"];
let uniqueTags = [...new Set(rawTags)];
console.log(uniqueTags); // ["js", "react", "node"]

// Group objects by a property using reduce
let users = [
  { name: "Aarav", role: "admin" },
  { name: "Meera", role: "editor" },
  { name: "Rohan", role: "admin" }
];

let groupedByRole = users.reduce((acc, user) => {
  (acc[user.role] ??= []).push(user.name);
  return acc;
}, {});
console.log(groupedByRole); // { admin: ["Aarav", "Rohan"], editor: ["Meera"] }

// Method chaining: filter -> map -> reduce
let totalEvenDoubled = [1, 2, 3, 4, 5, 6]
  .filter(n => n % 2 === 0) // [2, 4, 6]
  .map(n => n * 2)          // [4, 8, 12]
  .reduce((sum, n) => sum + n, 0);
console.log(totalEvenDoubled); // 24
