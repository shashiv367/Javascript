const globalHero = "Batman";

function gothamCity() {
  const localHero = "Robin";
  
  // Functions can look "up" and access the global scope
  console.log(`${globalHero} and ${localHero}`); 
}

gothamCity(); 
// Output: "Batman and Robin"

// The global scope cannot look "down" into a function
console.log(localHero); 
// Output: ReferenceError: localHero is not defined

if (true) {
  var leakyVariable = "I escape the block!";
  let secureVariable = "I am trapped inside.";
}

console.log(leakyVariable);  // Output: "I escape the block!"
console.log(secureVariable); // Output: ReferenceError

function first() {
  console.log("1. First function starts");
  second(); // Execution pauses here and jumps to second()
  console.log("3. First function finishes");
}

function second() {
  console.log("2. Second function runs");
}

first();

// Console Output Order:
// "1. First function starts"
// "2. Second function runs"
// "3. First function finishes"

function createCounter(startingNumber) {
  let count = startingNumber;

  // This inner function is returned, but it "remembers" the count variable
  return function() {
    count++;
    return count;
  };
}

const myCounter = createCounter(10);

console.log(myCounter()); // Output: 11
console.log(myCounter()); // Output: 12
console.log(myCounter()); // Output: 13

// This works perfectly because of hoisting
greetUser(); 

function greetUser() {
  console.log("Hello there!");
}

// NOTE: Arrow functions assigned to variables (const greet = () => {}) 
// are NOT hoisted in this way.

