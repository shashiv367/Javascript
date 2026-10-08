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
