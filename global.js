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

// ==========================================
// 1. this in an Object
// ==========================================

const student = {
  name: "Rahul",
  age: 21,

  introduce: function() {
    console.log("My name is " + this.name);
    console.log("My age is " + this.age);
  }
};

student.introduce();


// ==========================================
// 2. this refers to the object
// ==========================================

const car = {
  brand: "BMW",

  showBrand: function() {
    console.log(this.brand);
  }
};

car.showBrand();


// ==========================================
// 3. Changing object values
// ==========================================

const person = {
  name: "Arjun",

  greet: function() {
    console.log("Hello " + this.name);
  }
};

person.greet();

person.name = "Ravi";

person.greet();


// ==========================================
// 4. this in a regular function
// ==========================================

function showThis() {
  console.log(this);
}

showThis();


// ==========================================
// 5. this with a constructor function
// ==========================================

function Student(name, age) {
  this.name = name;
  this.age = age;
}

const student1 = new Student("Rahul", 21);
const student2 = new Student("Priya", 22);

console.log(student1.name);
console.log(student1.age);

console.log(student2.name);
console.log(student2.age);


// ==========================================
// 6. Arrow functions and this
// ==========================================

const user = {
  name: "Batman",

  normalFunction: function() {
    console.log(this.name);
  },

  arrowFunction: () => {
    console.log(this.name);
  }
};

user.normalFunction();
// Batman

user.arrowFunction();
// undefined
