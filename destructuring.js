const user = {
  name: "Shashi",
  age: 21
};

const { name, age } = user;

console.log(name);
console.log(age);

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);

const user1 = { Fname: 'Alice', Fage: 28, role: 'Admin' };

// 1. Basic destructuring
const { Fname, Fage } = user1;
console.log(Fname); // 'Alice'

// 2. Renaming variables
const { role: jobTitle } = user1;
console.log(jobTitle); // 'Admin'

// 3. Assigning default values (if property is undefined)
const { theme = 'dark', Fname: firstName } = user1;
console.log(theme); // 'dark'

const colors = ['red', 'green', 'blue', 'yellow'];

// 1. Basic destructuring
const [primary, secondary] = colors;
console.log(primary); // 'red'

// 2. Skipping items using commas
const [, , tertiary] = colors;
console.log(tertiary); // 'blue'

// 3. Swapping variables instantly
let a1 = 1, b1 = 2;
[a1, b1] = [b1, a1];

const order = { id: 99, item: 'Keyboard', price: 120 };

// Instead of passing the whole object and doing 'order.item' inside:
function printReceipt({ item, price, tax = 0.10 }) {
  const total = price + (price * tax);
  console.log(`Sold: ${item} for $${total}`);
}

printReceipt(order);

// ==========================================
// 1. Rest Syntax with Destructuring (...)
// ==========================================

// Objects: Gather remaining properties into a new object
const userProfile = { id: 101, username: 'dev_shashi', email: 'shashi@dev.com', role: 'admin' };
const { id, ...details } = userProfile;

console.log(id);      // 101
console.log(details); // { username: 'dev_shashi', email: 'shashi@dev.com', role: 'admin' }

// Arrays: Gather remaining elements into a new array
const scoreList = [98, 85, 72, 60, 45];
const [firstPlace, secondPlace, ...restOfScores] = scoreList;

console.log(firstPlace);   // 98
console.log(restOfScores); // [72, 60, 45]

// ==========================================
// 2. Nested Destructuring
// ==========================================

const company = {
  name: 'TechCorp',
  location: {
    city: 'Hyderabad',
    country: 'India'
  },
  employees: ['Alice', 'Bob']
};

// Extracting deeply nested object and array elements
const {
  location: { city },
  employees: [leadDev]
} = company;

console.log(city);    // 'Hyderabad'
console.log(leadDev); // 'Alice'

// ==========================================
// 3. Dynamic Property Names
// ==========================================

const keyToExtract = 'role';
const settings = { role: 'Moderator', status: 'Active' };

// Use square brackets to destructure using a variable key
const { [keyToExtract]: dynamicValue } = settings;
console.log(dynamicValue); // 'Moderator'

// ==========================================
// 4. Safe Function Parameter Defaults
// ==========================================

// Fallback to empty object {} prevents runtime TypeError if no argument is passed
function configureApp({ mode = 'production', port = 8080 } = {}) {
  console.log(`Running in ${mode} on port ${port}`);
}

configureApp({ port: 3000 }); // "Running in production on port 3000"
configureApp();              // "Running in production on port 8080"

// ==========================================
// 5. Destructuring in Loops (for...of)
// ==========================================

const users = [
  { id: 1, name: 'Shashi', skills: ['JS', 'React'] },
  { id: 2, name: 'Alice', skills: ['Python', 'SQL'] }
];

// Destructure directly in the loop declaration (including nested arrays)
for (const { name, skills: [primarySkill] } of users) {
  console.log(`${name}'s primary skill is ${primarySkill}`);
}
// Output:
// "Shashi's primary skill is JS"
// "Alice's primary skill is Python"

// ==========================================
// 6. Destructuring Function Return Values
// ==========================================

function getCoordinates() {
  return { lat: 17.3850, lng: 78.4867, zoom: 12 };
}

// Extract only what you need from the returned object
const { lat, lng } = getCoordinates();
console.log(`Latitude: ${lat}, Longitude: ${lng}`);

// Works great with tuples/arrays too (like React's useState pattern)
function useCounter(initialValue) {
  let count = initialValue;
  const increment = () => ++count;
  return [count, increment];
}

const [currentCount, addOne] = useCounter(0);
console.log(currentCount); // 0
console.log(addOne());     // 1

// ==========================================
// 7. Destructuring with Regular Expressions
// ==========================================

const dateString = '2026-11-21';
const dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;

// Skip the full match at index 0 using a leading comma
const [, year, month, day] = dateString.match(dateRegex) || [];
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);

// ==========================================
// 8. Destructuring into Existing Variables
// ==========================================

let status = 'Pending';
let code = 102;

const response = { status: 'Success', code: 200 };

// Wrap in parentheses () so JS doesn't treat { ... } as a code block
({ status, code } = response);
console.log(status, code); // "Success" 200

// ==========================================
// 9. Mixed Array & Object Destructuring (API Responses)
// ==========================================

const apiResponse = {
  status: 200,
  data: [
    { itemId: 'A1', title: 'Mechanical Keyboard' },
    { itemId: 'B2', title: 'Wireless Mouse' }
  ]
};

// Jump straight to the second item's title
const {
  data: [, { title: secondItemTitle }]
} = apiResponse;

console.log(secondItemTitle); // "Wireless Mouse"
