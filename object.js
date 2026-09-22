let inp = 'name'

//object
let obj = {
    //properties
    name:"kkk",
    age:23,
    gender:"Male",
    'work exp':4,
    laptop:{
        cpu:17,
        ram:16,
        brand:'Asus'
    }
} 

console.log(obj.name)//dot operator
console.log(obj)
console.log(typeof(obj))
console.log(obj['work exp'])//square operator
console.log(obj.inp)//can't use dot operator
console.log(obj[inp])

console.log(obj.laptop.brandl?.length)
// delete obj.laptop
// console.log(obj)

//for in loop
for(let key in obj){
    //console.log(key, obj.name) not suitable here
    console.log(key, obj[key])
}

const person = {
    name: "Shashi",
    age: 21,

    greet() {
        console.log("Hello");
    }
};

person.greet();

const person1 = {
    name: "Shashi",
    age: 21,

    greet1() {
        console.log("Hello");
    }
};

person.greet1();

const calculator = {
    add(a, b) {
        return a + b;
    },

    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator.add(10, 20));
console.log(calculator.multiply(5, 4));