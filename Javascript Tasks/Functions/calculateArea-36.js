// A. Calculate Area Function
function calculateArea(width,height){
    return `Area of rectangle is ${width * height}`
}
const width_a = 5
const height_a = 10
console.log(calculateArea(width_a,height_a))

// B. Modify Calculate Area Function with Default Values:
const width_b = 8
const height_b = 15
function calculateAreaWithDefaults(width=1, height=1){
    return `Area of rectangle is ${width * height}`
}
console.log(calculateAreaWithDefaults())
console.log(calculateAreaWithDefaults(width_b, height_b))

// C. Rewrite Calculate Area as a Function Expression:
const width_c = 10
const height_c = 20
const calculateAreaFunction = function calculateAreaWithDefaults(width, height){
    return `Area of rectangle is ${width * height}`
}
console.log(calculateAreaFunction(width_c, height_c))

// D. Rewrite Calculate Area as an Arrow Function:
const calculateAreaArrow = (width, height) =>{
    return `Area of rectangle in Arrow Function is ${width * height}`
}
const width_d = 10
const height_d = 18
console.log(calculateAreaArrow(width_d, height_d))