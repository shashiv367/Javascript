/* =================================
   TOPIC 1: IF AND ELSE
================================= */

let n1 = 6;
let n2 = 4;
let n3 = 9;

let res = n1 > n2;

if (res) {
    console.log("n1 is greater than n2");
} else {
    console.log("n2 is greater");
    console.log("yeee");
}

console.log("hello...");


/* =================================
   TOPIC 2: FIND THE GREATEST NUMBER
================================= */

let num1 = 5;
let num2 = 9;
let num3 = 8;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is greater than both numbers");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is greater than both numbers");
} else {
    console.log("num3 is greater than both numbers");
}


/* =================================
   TOPIC 3: SWITCH STATEMENT
================================= */

// A switch statement is used to execute
// a block of code based on a matching value.

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


/* =================================
   TOPIC 4: SWITCH WITH STRINGS
================================= */

let role = "developer";

switch (role) {
    case "admin":
        console.log("Welcome Admin");
        break;

    case "developer":
        console.log("Welcome Developer");
        break;

    case "student":
        console.log("Welcome Student");
        break;

    default:
        console.log("Unknown Role");
}


/* =================================
   TOPIC 5: MULTIPLE CASES
================================= */

let month = 4;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Rainy Season");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;

    default:
        console.log("Invalid month");
}
