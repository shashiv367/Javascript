let arr = [10,20,30,40,50,60,70]

//pop
arr.pop()
console.log(arr)

//push
arr.push(33)
console.log(arr);

//shift
arr.shift()
console.log(arr);

//unshfit
arr.unshift(22);
console.log(arr);

//indexof
console.log(arr.indexOf(30));

//forEach
arr.forEach((num) => {
    console.log(num);
})
console.log("<br>");

//map
let num3 = arr.map((num3) => {
    num3 = num3+10
    console.log(num3);
    
})
console.log(arr);

//filter
let num2 = arr.filter((num2) => {
    return num2 > 10 && num2 < 55
})
console.log(num2);

//find
let num4 = arr.find((num4) => {
    return num4 == 33
})
console.log(num4);

//findIndex
console.log(arr.findIndex((num) => {
    return num == 40
}));

console.log(arr);

//reduce
let red = arr.reduce((num5) => {
    return num5
})
console.log(red);
/**
 * ==========================================
 * MASTER JAVASCRIPT ARRAYS & METHODS GUIDE
 * ==========================================
 */

// 1. INITIALIZATION & MUTATION BASICS
let arr = [10, 20, 30, 40, 50, 60, 70];
console.log("=== 1. MUTATION BASICS ===");

// pop: Removes the last element
arr.pop();
console.log("After pop():", arr); // [10, 20, 30, 40, 50, 60]

// push: Adds an element to the end
arr.push(33);
console.log("After push(33):", arr); // [10, 20, 30, 40, 50, 60, 33]

// shift: Removes the first element
arr.shift();
console.log("After shift():", arr); // [20, 30, 40, 50, 60, 33]

// unshift: Adds an element to the beginning
arr.unshift(22);
console.log("After unshift(22):", arr); // [22, 20, 30, 40, 50, 60, 33]

// indexOf: Finds the first index of a specified element
console.log("Index of 30:", arr.indexOf(30)); // 2


/**
 * ==========================================
 * 2. ITERATION & TRANSFORMATION METHODS
 * ==========================================
 */
console.log("\n=== 2. ITERATION & TRANSFORMATION ===");

// forEach: Executes a provided function once for each array element
console.log("forEach output:");
arr.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map: Creates a populated array with the results of calling a provided function
let mappedArr = arr.map((num) => num + 10);
console.log("Original arr (unchanged by map):", arr);
console.log("Mapped arr (+10):", mappedArr);

// filter: Creates a shallow copy containing elements that pass the test
let filteredArr = arr.filter((num) => num > 10 && num < 55);
console.log("Filtered arr (10 < x < 55):", filteredArr);


/**
 * ==========================================
 * 3. SEARCHING & TESTING METHODS
 * ==========================================
 */
console.log("\n=== 3. SEARCHING & TESTING ===");

// find: Returns the first element that satisfies the testing function
let foundItem = arr.find((num) => num === 33);
console.log("Found item (=== 33):", foundItem);

// findIndex: Returns the index of the first element that satisfies the testing function
let foundIndex = arr.findIndex((num) => num === 40);
console.log("Found index of 40:", foundIndex);

// includes: Determines whether an array includes a certain value
console.log("Includes 50?", arr.includes(50)); // true

// some: Checks if at least one element passes the test
let hasLargeNum = arr.some((num) => num > 50);
console.log("Has any number > 50?", hasLargeNum); // true

// every: Checks if all elements pass the test
let allPositive = arr.every((num) => num > 0);
console.log("Are all numbers positive?", allPositive); // true


/**
 * ==========================================
 * 4. REDUCING & ACCUMULATING
 * ==========================================
 */
console.log("\n=== 4. REDUCING & ACCUMULATING ===");

// reduce: Executes a reducer function on each element, resulting in a single output value
let sum = arr.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
console.log("Sum of all elements (reduce):", sum);

// reduceRight: Same as reduce, but iterates from right to left
let concatenated = arr.reduceRight((acc, val) => `${acc}-${val}`, "Start");
console.log("ReduceRight result:", concatenated);


/**
 * ==========================================
 * 5. SORTING & FLATTENING
 * ==========================================
 */
console.log("\n=== 5. SORTING & FLATTENING ===");

// sort: Sorts elements in place (note: converts elements to strings by default!)
let unsorted = [5, 20, 1, 100, 3];
// Correct numeric sort using a comparison function:
let sortedNumeric = [...unsorted].sort((a, b) => a - b);
console.log("Sorted numeric array:", sortedNumeric); // [1, 3, 5, 20, 100]

// reverse: Reverses an array in place
let reversed = [...sortedNumeric].reverse();
console.log("Reversed array:", reversed);

// flat: Flattens nested arrays up to a specified depth
let nested = [1, [2, 3], [4, [5, 6]]];
console.log("Flattened (depth 1):", nested.flat(1));
console.log("Flattened (depth Infinity):", nested.flat(Infinity));

// flatMap: Maps each element using a mapping function, then flattens the result by depth 1
let flatMapped = [1, 2, 3].flatMap((x) => [x, x * 2]);
console.log("FlatMap result:", flatMapped); // [1, 2, 2, 4, 3, 6]


/**
 * ==========================================
 * 6. ADVANCED ES6+ CONCEPTS
 * ==========================================
 */
console.log("\n=== 6. ADVANCED ES6+ CONCEPTS ===");

// Destructuring Arrays
const [first, second, ...restOfArray] = arr;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest of Array:", restOfArray);

// Spread Operator (...) for combining and copying
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
const combined = [...arrayA, 99, ...arrayB];
console.log("Combined via Spread:", combined);

// Array.from() and Array.of()
const range = Array.from({ length: 5 }, (_, index) => (index + 1) * 10);
console.log("Array.from generated range:", range); // [10, 20, 30, 40, 50]

const customArray = Array.of(7, 8, 9);
console.log("Array.of result:", customArray);


/**
 * ==========================================
 * 7. PERFORMANCE & IMMUTABILITY (Chaining)
 * ==========================================
 */
console.log("\n=== 7. METHOD CHAINING (Functional Style) ===");

// Modern JavaScript heavily favors immutable method chaining:
const processedResult = arr
    .filter((n) => n % 2 === 0)       // Keep even numbers
    .map((n) => n * 2)               // Double them
    .reduce((acc, n) => acc + n, 0); // Sum them up

console.log("Chained result (filter -> map -> reduce):", processedResult);
