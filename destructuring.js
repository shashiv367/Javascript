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