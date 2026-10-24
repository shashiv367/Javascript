let laptop = {
    brand :"Dell",
    price : 45000,
    ram : "16gb",
    storage : "512gb",

    getlaptop : function(){
        console.log("Hii");
        return "hello World"
    }
}
laptop.getlaptop()

const name = "cnn"
console.log(name.toUpperCase());

let nam1 = "WWER"
console.log(nam1.toLowerCase());

let str = "I have been working"
console.log(str.includes("have"));
console.log(str.includes("wwer"));

let slice1 = "I have a car with keys on it"
console.log(slice1.slice(1,5));

const numbers = [10, 20, 30];

numbers.forEach(function(num) {
    console.log(num);
});
/*output 
10
20
30*/

const person = {
    name: "Shashi",
    age: 21,

    introduce() {
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }
};

person.introduce();

// 1. Arrow Functions (A shorter way to write functions)
// Notice how clean the syntax is compared to regular functions.

const multiply = (a, b) => {
    return a * b;
};
console.log("Multiplication:", multiply(5, 4));

// If the function only returns a value, you can write it in a single line (implicit return):
const add = (a, b) => a + b;
console.log("Addition:", add(10, 20));


// 2. Array.map() - Transforms every element in an array and returns a NEW array
const prices = [100, 200, 300];

const discountedPrices = prices.map(price => price - 10); // Subtract 10 from each
console.log("Discounted Prices:", discountedPrices); 
// Output: [90, 190, 290]


// 3. Array.filter() - Creates a new array with elements that pass a condition
const ages = [15, 22, 18, 30, 12];

const adults = ages.filter(age => age >= 18);
console.log("Adults:", adults); 
// Output: [22, 18, 30]


// 4. Combining Objects with Array Methods
const users = [
    { name: "Rahul", active: true },
    { name: "Anita", active: false },
    { name: "Kiran", active: true }
];

// Get only the names of active users
const activeUserNames = users
    .filter(user => user.active)          // Step 1: Keep only active users
    .map(user => user.name);             // Step 2: Extract just their names

console.log("Active User Names:", activeUserNames); 
// Output: ["Rahul", "Kiran"]


// 1. Understanding Asynchronicity with setTimeout
// JavaScript is normally synchronous (executes line by line). 
// setTimeout is asynchronous – it runs in the background.

console.log("Start");

setTimeout(() => {
    console.log("This prints after 2 seconds");
}, 2000);

console.log("End");
/* Output:
   Start
   End
   This prints after 2 seconds
*/


// 2. Promises (Representing a future value: Success or Failure)
const fetchUserData = new Promise((resolve, reject) => {
    let success = true; // Change to false to test failure

    setTimeout(() => {
        if (success) {
            resolve({ userId: 101, username: "Shashi_Dev" });
        } else {
            reject("Error: Failed to fetch user data.");
        }
    }, 1500);
});

// Consuming a Promise using .then() and .catch()
fetchUserData
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.log("Failed:", error);
    });


// 3. Async / Await (A cleaner, modern way to handle Promises)
// 'async' makes a function return a Promise.
// 'await' pauses the function execution until the Promise resolves.

const getUserProfile = async () => {
    try {
        console.log("Fetching profile...");
        
        // Wait for the promise to resolve
        const result = await fetchUserData;
        
        console.log("Profile loaded successfully:", result);
    } catch (err) {
        console.log("Caught an error:", err);
    } finally {
        console.log("Process finished.");
    }
};

getUserProfile();
