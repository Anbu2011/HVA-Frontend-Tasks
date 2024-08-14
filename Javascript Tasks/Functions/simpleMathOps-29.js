function doubleNumber(number1){             //CALLBACK FUNCTION
    return number1 * 2
}

function squareNumber(number2){             //CALLBACK FUNCTION
    return number2 ** 2
}

function  incrementNumber(number3){         //CALLBACK FUNCTION
    return number3 + 1 
}

function performOperation(num, operation){  //HOF
    return operation(num)
}

console.log(performOperation(5, doubleNumber))

console.log(performOperation(5, squareNumber))

console.log(performOperation(5, incrementNumber))


//we can make multiple functions/callbackfn that can do different operations and we pass those functions/callbackfn as an argument
// to the HOF. So the HOF runs its operations and runs callbackfunction operations too.

// by sending different callback functions to the same HOF, we can achieve different behaviors.