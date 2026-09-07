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

