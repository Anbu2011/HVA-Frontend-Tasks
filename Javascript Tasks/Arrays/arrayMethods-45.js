// forEach Method as a callback function expression
const numbers = [1,2,3,4,5]
numbers.forEach(function callBack1(num){
    console.log(num)
})

numbers.forEach(function callBack2(num){
    console.log(num * 2)
})

//MAP - as a function expression
const  squaredNumbers = numbers.map(function sq_num(num){
    return num ** 2;
})
console.log(squaredNumbers)

//Map function and callback function to use arrow function
const  squaredNumbers2 = numbers.map((num) => num**2)
console.log(squaredNumbers2)

// Iterate and Create a New Filtered Array Using filter()  & as a function expression.
const evenNumbers = numbers.filter(function even_num(num){
    return num % 2 === 0
})
console.log(evenNumbers)

//Filter function and callback function to use arrow function
const evenNumbers2 = numbers.filter((num) => num%2===0)
console.log(evenNumbers2)
