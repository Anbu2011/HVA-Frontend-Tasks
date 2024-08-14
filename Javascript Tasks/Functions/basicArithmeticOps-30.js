function addNumbers(num1,num2){                     //CALLBACK FUNCTION
    return num1 + num2
}

function multiplyNumbers(num1, num2){               //CALLBACK FUNCTION
    return num1 * num2
}

function subtractNumbers(num1, num2){               //CALLBACK FUNCTION
    return num1 - num2
}

function divideNumbers(num1,num2){                  //CALLBACK FUNCTION
    if(num2 === 0){
        return "Error. Can't divisible by 0"
    } else{
        return num1 / num2
    }
}

function performArithmetic(num1,num2, operation){    //HOF
    return operation(num1,num2)
}


console.log(performArithmetic(5,3,addNumbers))

console.log(performArithmetic(5,3,multiplyNumbers))

console.log(performArithmetic(5,3,subtractNumbers))

console.log(performArithmetic(5,0,divideNumbers))