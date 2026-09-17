let arr = [10,20,30,40,50,60,70]

//pop
arr.pop()
console.log(arr)

//push
arr.push(33)
console.log(arr);

//shift
arr.shift()
console.log(arr);

//unshfit
arr.unshift(22);
console.log(arr);

//indexof
console.log(arr.indexOf(30));

//forEach
arr.forEach((num) => {
    console.log(num);
})
console.log("<br>");

//map
let num3 = arr.map((num3) => {
    num3 = num3+10
    console.log(num3);
    
})
console.log(arr);

//filter
let num2 = arr.filter((num2) => {
    return num2 > 10 && num2 < 55
})
console.log(num2);

//find
let num4 = arr.find((num4) => {
    return num4 == 33
})
console.log(num4);

//findIndex
console.log(arr.findIndex((num) => {
    return num == 40
}));

console.log(arr);

//reduce
let red = arr.reduce((num5) => {
    return num5
})
console.log(red);
