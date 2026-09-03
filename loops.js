//Loop
// Initialize, condition, increment

//initial
let i = 1

//condition
while(i<=5){
    console.log("hi",i)
    //increment or decrement
    i++
}

console.log(i)

let d = 5

//condition
while(d >= 0){
    console.log("hi",d)
    //increment or decrement
    d--
}
console.log(d)

let i1 = 9

do{
    console.log("hi",i1)
    i1++
}while(i1<=5)

for(/*initialize*/ let i2 = 1;/*condition*/ i2 <= 5;/*increment*/ i2++){
    console.log("hi")

    //Nested loop
    for(let j = 1; j<=5; j++){
        console.log("hello")
    }
}

//Print number from 1 to 10 using for loop
for(let i3 = 1;i3<=10;i3++){
    console.log(i3)
}
sum = 0
for(let i4 = 1; i4 <= 100; i4++){
    sum = sum +i4
}
console.log("Sum",sum)

let num1 = 9
for(let i5 = 1;i5<=10;i5++){
    console.log(`${num1} * ${i5} = ${num1 * i5}`)
}


for(num2 = 2; num2 <= 100; num2++){
    let isPrime = true

    for(let j1 = 2;j1 < num2; j1++){
        if(num2 % j1 === 0){
            isPrime = false
            break;
        }
    }
    if(isPrime){
        console.log(num2)
    }
}
