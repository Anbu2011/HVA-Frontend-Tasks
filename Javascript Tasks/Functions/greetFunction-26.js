function greet(name){
    return `Hello, ${name}!!`
}
console.log(greet("Alice"))


function greetDefault(name = "Guest"){
    return  `Hello, ${name} !!  `
}
console.log(greetDefault())


const greetFunction = function greet(name){
    return `Hello ${name}!!`
}
console.log(greetFunction("Bob"))


const greetArrow = (name) =>{
    return `Hello, ${name}!!`
}
console.log(greetArrow("Ajay"))
