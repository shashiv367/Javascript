// toUpperCase
let a = 'nnn'
console.log(a.toUpperCase());

//toLowerCase
let b = 'AbDNS'
console.log(b.toLowerCase());
 
//includes
let c = "i have a car"
console.log(c.includes("have"));

//startsWith
let d = 'Green color'
console.log(d.startsWith("Green"));

//endswith
let e = 'Blue color'
console.log(e.endsWith("color"));

//slice
let f = "ooo myy gwadddd"
console.log(f.slice(0,9));

//toString
let num = 23
console.log(num.toString());

// 1. trim() - Removes whitespace from both ends of a string
let str1 = "   Hello World!   ";
console.log(str1.trim()); // Output: "Hello World!"

// 2. replace() / replaceAll() - Replaces specified values in a string
let str2 = "I like apples and apples";
console.log(str2.replace("apples", "oranges")); // Output: "I like oranges and apples"
console.log(str2.replaceAll("apples", "oranges")); // Output: "I like oranges and oranges"

// 3. split() - Splits a string into an array of substrings
let str3 = "apple,banana,cherry";
let fruitsArray = str3.split(",");
console.log(fruitsArray); // Output: ["apple", "banana", "cherry"]

// 4. indexOf() - Returns the index of the first occurrence of a value (-1 if not found)
let str4 = "JavaScript";
console.log(str4.indexOf("Script")); // Output: 4

// 5. repeat() - Returns a new string with a specified number of copies
let str5 = "Ha!";
console.log(str5.repeat(3)); // Output: "Ha!Ha!Ha!"

// 6. Template Literals (String Interpolation) - Embeds variables using backticks ``
let name = "Alex";
let age = 25;
let str6 = `My name is ${name} and I am ${age} years old.`;
console.log(str6); // Output: "My name is Alex and I am 25 years old."

// 7. join() - Joins all elements of an array into a single string
let arrayToJoin = ["HTML", "CSS", "JS"];
console.log(arrayToJoin.join(" - ")); // Output: "HTML - CSS - JS"

// --- Additional Essential JavaScript Methods ---

// 8. charAt() - Returns the character at a specified index
let str7 = "Hello";
console.log(str7.charAt(1)); // Output: "e"

// 9. substring() - Extracts characters between two indices (does not accept negative indexes)
let str8 = "JavaScript";
console.log(str8.substring(0, 4)); // Output: "Java"

// 10. concat() - Joins two or more strings
let str9 = "Hello";
console.log(str9.concat(" ", "World!")); // Output: "Hello World!"

// 11. map() - Creates a new array with the results of calling a function on every element
let numbers = [1, 2, 3];
let doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6]

// 12. filter() - Returns a new array with all elements that pass the test implemented by the function
let ages = [12, 18, 20, 15, 22];
let adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [18, 20, 22]

// 13. reduce() - Executes a reducer function on each array element, resulting in a single output value
let sum = [1, 2, 3, 4].reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 10

// 14. find() - Returns the first element in the array that satisfies the provided testing function
let inventory = [5, 12, 8, 130, 44];
let found = inventory.find(element => element > 10);
console.log(found); // Output: 12

// 15. some() - Checks if at least one array element passes the test implemented by the function
let scores = [45, 60, 32, 80];
let hasPassingScore = scores.some(score => score >= 50);
console.log(hasPassingScore); // Output: true
