const temperatures = [-3, 14, 22, 5, -10]

// Function Expression
console.log("\nIn Function Expression")
temperatures.forEach(function callBck1(ele){
    console.log(ele)
})

// Arrow Function
console.log("\nIn Arrow Function")
temperatures.forEach((ele) => console.log(ele))

// Function Expression
console.log("\nIn Function Expression")
temperatures.forEach(function callBack2(ele){
    const fahrenheit = (ele*9/5)+32
    console.log(`Fahrenheit of ${ele} is ${fahrenheit}`)
})

// Arrow Function
console.log("\nIn Arrow Function")
temperatures.forEach(ele => {
    const fahrenheit = (ele*9/5)+32
    console.log(`Fahrenheit of ${ele} is ${fahrenheit}`)
});


//MAP & Function Expression
console.log("\nMAP & Function Expression")
const temperaturesInFahrenheit = temperatures.map(function callBack3(ele){
    return ele*9/5 + 32
})
console.log("temperaturesInFahrenheit using MAP & Function Expression",temperaturesInFahrenheit)

//MAP & Arrow Function
console.log("\nMAP & Arrow Function")
const temperaturesInFahrenheit2 = temperatures.map(ele => ele*9/5 + 32)
console.log("temperaturesInFahrenheit using MAP & Arrow Function", temperaturesInFahrenheit2)

//FILTER & Function Expression
console.log("\nFILTER & Function Expression")
const belowFreezing = temperatures.filter(function callBack(ele){
    return ele < 0
})
console.log(belowFreezing)

//FILTER & Arrow Function
console.log("\nFILTER & Arrow Function")
const belowFreezing2 =  temperatures.filter(ele => ele<0)
console.log(belowFreezing2)
