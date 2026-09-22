//Modification of objects

const bankAccount = {
    owner: "Shashi",
    balance: 5000,

    deposit(amount) {
        this.balance += amount;
    },

    withdraw(amount) {
        this.balance -= amount;
    },

    showBalance() {
        console.log(this.balance);
    }
};

bankAccount.deposit(2000);
bankAccount.withdraw(500);

bankAccount.showBalance();

const obj = {
    name: "kkk",
    age: 23,
    gender: "Male"
};

console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);

const student = {
    name: "Ravi",
    age: 21,
    marks: 85,
    city: "Hyderabad"
};

const { name, marks } = student;

console.log(name);
console.log(marks);