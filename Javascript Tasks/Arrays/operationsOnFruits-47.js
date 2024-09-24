const fruits = ["apple", "banana", "cherry", "date"]

//ForEach & Function Expression
console.log("ForEach & Function Expression")
fruits.forEach(function callBack(ele){
    console.log(ele.toUpperCase())
})

//ForEach & Arrow Function
console.log("\nForEach & Arrow Function")
fruits.forEach(ele => console.log(ele.toUpperCase()))

// Total Characters
console.log('\nTotal Characters')
let totalCharacters = 0
fruits.forEach(ele => totalCharacters = totalCharacters + ele.length)
console.log(totalCharacters)


//MAP & Function Expression - Reverse each element in an array
console.log("\nReversed elements -- MAP & Function Expression")
const reversedFruits = fruits.map(function callBack(ele){
    return ele.split('').reverse().join('')
})
console.log(reversedFruits)

//MAP & Arrow Function - Reverse each element in an array
console.log("\nReversed elements -- MAP & Arrow Function")
const reversedFruits2 = fruits.map(ele => ele.split('').reverse().join(''))
console.log(reversedFruits2)

//Filter & Function Expression
console.log('\nFilter more than 5 char & Function Expression')
const longFruits = fruits.filter(function callback(ele){
    return ele.length > 5
})
console.log(longFruits)

//Filter & Arrow Function
console.log('\nFilter more than 5 char & Arrow Function')
const longFruits2 = fruits.filter(ele => ele.length>5)
console.log(longFruits2)

// Create a New Filtered and Modified Array using filter() and map():
console.log("\nContains 'a' & uppercase the fruits that contains 'a' ")
const fruitContainsA = fruits.filter(function callBack(ele){
    return ele.includes('a')
})

const aFruitsUpper = fruitContainsA.map(function callBack(ele){
    return ele.toUpperCase()
})
console.log(aFruitsUpper)

