// Example 1: Determining alarm/schedule time based on the day of the week
let day = "Sunday";

switch (day) {
    case 'Monday':
        console.log("8am");
        break;
    case 'Tuesday':
    case 'Wednesday': // Corrected spelling from 'Wednesda'
    case 'Thursday':
        console.log("4am");
        break;
    case 'Friday':
        console.log("6am");
        break;
    case 'Saturday':
        console.log("9am");
        break;
    case 'Sunday':
        console.log("8am");
        break;
    default:
        console.log("Invalid day");
}

// Output for Example 1:
// 8am


// Example 2: Simple calculator using arithmetic operators
let a = 3;
let b = 5;

let operator = "/";

switch (operator) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    default:
        console.log("Invalid Sign");
}

// Output for Example 2:
// 0.6


// ==========================================
// 1. Day Scheduler (With Grouped Cases)
// ==========================================
let day = "Sunday";

switch (day) {
    case 'Monday':
    case 'Sunday':
        console.log("Schedule: 8am");
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("Schedule: 4am");
        break;
    case 'Friday':
        console.log("Schedule: 6am");
        break;
    case 'Saturday':
        console.log("Schedule: 9am");
        break;
    default:
        console.log("Invalid day");
}


// ==========================================
// 2. Calculator Function with Error Handling
// ==========================================
function calculate(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        case '%':
            return num1 % num2;
        case '**':
            return num1 ** num2;
        default:
            return "Invalid Operator";
    }
}

console.log("Calculator Result:", calculate(3, 5, "/")); // Output: 0.6
console.log("Calculator Result:", calculate(10, 0, "/")); // Output: Error: Division by zero


// ==========================================
// 3. Range Checking using switch(true)
// ==========================================
let score = 85;
let grade;

switch (true) {
    case (score >= 90):
        grade = "A";
        break;
    case (score >= 80):
        grade = "B";
        break;
    case (score >= 70):
        grade = "C";
        break;
    case (score >= 60):
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(`Score: ${score}, Grade: ${grade}`); // Output: Score: 85, Grade: B


// ==========================================
// 4. Object Literal Alternative (Modern Approach)
// ==========================================
// In modern JS, object lookups are often used instead of simple switch statements
const actions = {
    'Monday': "8am",
    'Tuesday': "4am",
    'Wednesday': "4am",
    'Thursday': "4am",
    'Friday': "6am",
    'Saturday': "9am",
    'Sunday': "8am"
};

let selectedDay = "Friday";
let time = actions[selectedDay] || "Invalid day";
console.log(`Object Lookup for ${selectedDay}: ${time}`); // Output: Object Lookup for Friday: 6am
