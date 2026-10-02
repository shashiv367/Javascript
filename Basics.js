let /*keyword */ num = 1+2

console.log(num)

let uname = `javascript`
console.log(uname)

let job = `True`
console.log(job)

num = 9.6
console.log(num)

//constants
const pi = 3.14

// /* Data Types
// Primitive: Number, String, Boolean, Null, Undefined, Symbol
// Object*/

console.log(typeof(pi))
console.log(typeof(job))

let num2 = 100_00_000
console.log(num2)

console.log(Number.MAX_VALUE + 10)

let num3 = 104040n
console.log(num3 + 2n)

let fname = "Shashi"
let lname = "Vardhan"

let u_name = fname+lname

console.log(u_name)

let user = 'Shashi Vardhan\"WWW"\ '
console.log(user)

let bool = 5< 6
console.log(typeof(bool))

//Template Literal
let a = 4
let b = 5
let res = a + b

console.log(`The addition of ${a} and ${b} is ${res}`)

// ==========================================
// 1. Continuation of Your Initial Code
// ==========================================

let num = 1 + 2;
console.log(num); // 3

let uname = `javascript`;
console.log(uname); // javascript

let job = `True`;
console.log(job); // True

num = 9.6;
console.log(num); // 9.6

// Constants & Types
const pi = 3.14;
console.log(typeof pi); // "number"
console.log(typeof job); // "string"

// Numeric Separator & BigInt
let num2 = 100_00_000;
console.log(num2); // 10000000
console.log(Number.MAX_VALUE + 10); // 1.7976931348623157e+308

let num3 = 104040n;
console.log(num3 + 2n); // 104042n

// Strings & Escaping
let fname = "Shashi";
let lname = "Vardhan";
let u_name = fname + lname;
console.log(u_name); // "ShashiVardhan"

let user = 'Shashi Vardhan "WWW" ';
console.log(user); // Shashi Vardhan "WWW" 

let bool = 5 < 6;
console.log(typeof bool); // "boolean"

// Template Literals
let a = 4;
let b = 5;
let res = a + b;
console.log(`The addition of ${a} and ${b} is ${res}`);


// ==========================================
// 2. Explicit Type Conversion (Coercion)
// ==========================================

let strNum = "123";
let convertedNum = Number(strNum);
console.log(convertedNum, typeof convertedNum); // 123 "number"

let count = 0;
console.log(Boolean(count)); // false (0 is falsy)
console.log(Boolean("Hello")); // true (non-empty strings are truthy)


// ==========================================
// 3. Conditional Execution & Logical Operators
// ==========================================

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

// Ternary Operator (Short-hand IF)
let accessLevel = age >= 18 ? "Adult" : "Minor";
console.log(`Access level: ${accessLevel}`);


// ==========================================
// 4. Objects (Key-Value Pairs)
// ==========================================

let developer = {
  firstName: fname,
  lastName: lname,
  role: "Software Engineer",
  skills: ["JavaScript", "Node.js", "Python"],
  greet() {
    return `Hello, I am ${this.firstName} ${this.lastName}!`;
  }
};

console.log(developer.greet());
console.log(`Primary skill: ${developer.skills[0]}`);


// ==========================================
// 5. Arrays & Modern Array Methods
// ==========================================

let scores = [10, 25, 40, 55, 70];

// Map: Transform elements
let doubledScores = scores.map(score => score * 2);
console.log("Doubled Scores:", doubledScores); // [20, 50, 80, 110, 140]

// Filter: Extract specific elements
let highScores = scores.filter(score => score > 30);
console.log("Scores > 30:", highScores); // [40, 55, 70]

// Reduce: Accumulate elements into a single value
let totalScore = scores.reduce((acc, curr) => acc + curr, 0);
console.log("Total Sum:", totalScore); // 200


// ==========================================
// 6. Destructuring & Spread Operator
// ==========================================

// Array Destructuring
let [firstSkill, secondSkill] = developer.skills;
console.log(`Skills extracted: ${firstSkill}, ${secondSkill}`);

// Object Destructuring
let { role } = developer;
console.log(`Extracted role: ${role}`);

// Spread Operator (...) to copy and extend arrays
let updatedScores = [...scores, 85, 100];
console.log("Updated Scores Array:", updatedScores);

// ==========================================
// 7. Asynchronous JavaScript: Promises & Async/Await
// ==========================================

// --- A. Creating and Handling a Basic Promise ---
const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    console.log("\n[Promise] Fetching user data...");
    
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, username: "ShashiV", status: "Active" });
      } else {
        reject(new Error("Invalid User ID"));
      }
    }, 1500); // Simulates network delay (1.5s)
  });
};

// Consuming Promise using .then() and .catch()
fetchUserData(101)
  .then((data) => {
    console.log("[Promise .then()] Received:", data);
  })
  .catch((err) => {
    console.error("[Promise .catch()] Error:", err.message);
  });


// --- B. Async / Await Syntax (Cleaner Alternative) ---
const getUserProfile = async (id) => {
  try {
    console.log("[Async/Await] Initiating request...");
    const user = await fetchUserData(id); // Waits for Promise to resolve
    console.log(`[Async/Await] Welcome back, ${user.username}!`);
    return user;
  } catch (error) {
    console.error("[Async/Await Error]:", error.message);
  }
};

// Execute async function
getUserProfile(202);


// --- C. Real-World API Fetching (Browser / Node 18+ Fetch API) ---
const fetchPosts = async () => {
  try {
    console.log("\n[Fetch API] Querying JSONPlaceholder...");
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const postData = await response.json();
    console.log("[Fetch API] Post Title:", postData.title);
  } catch (err) {
    console.error("[Fetch Error]:", err.message);
  }
};

fetchPosts();


// --- D. Executing Multiple Promises in Parallel (Promise.all) ---
const loadDashboardData = async () => {
  const task1 = new Promise((res) => setTimeout(() => res("Analytics Loaded"), 1000));
  const task2 = new Promise((res) => setTimeout(() => res("Notifications Loaded"), 500));

  try {
    // Executes both tasks concurrently
    const [analytics, notifications] = await Promise.all([task1, task2]);
    console.log("\n[Promise.all] Results:", { analytics, notifications });
  } catch (error) {
    console.error("[Promise.all Error]:", error);
  }
};

loadDashboardData();

