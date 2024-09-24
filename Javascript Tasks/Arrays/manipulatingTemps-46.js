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
    console.log(fahrenheit)
})

// Arrow Function
console.log("\nIn Arrow Function")
temperatures.forEach(ele => {
    const fahrenheit = (ele*9/5)+32
    console.log(fahrenheit)
});


//MAP & Function Expression
console.log("\nMAP & Function Expression")
temperaturesInFahrenheit = temperatures.map(function callBack3(ele){
    return ele*9/5 + 32
})
console.log(temperaturesInFahrenheit)

//MAP & Arrow Function
console.log("\nMAP & Arrow Function")
temperaturesInFahrenheit = temperatures.map(ele => ele*9/5 + 32)
console.log(temperaturesInFahrenheit)

//FILTER & Function Expression
console.log("\nFILTER & Function Expression")
belowFreezing = temperatures.filter(function callBack(ele){
    return ele < 0
})
console.log(belowFreezing)

//FILTER & Arrow Function
console.log("\nFILTER & Arrow Function")
belowFreezing =  temperatures.filter(ele => ele < 0)
console.log(belowFreezing)
