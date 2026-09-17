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