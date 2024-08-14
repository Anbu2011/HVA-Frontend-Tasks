// A. Define Higher Order Function:

function  higherOrderFunction(num, callback){
    callback(num)
}

// B. Define Callback Function and Call Higher Order Function:

function  callbackFunction(num1){
    console.log(num1)
}

higherOrderFunction(5,callbackFunction)

// C. Call Higher Order Function with a Function Expression as Callback:
higherOrderFunction(10, function callback2(num2){
    console.log(num2)
})

// D. Callback to Log Square of the Number:
higherOrderFunction(4,function callback3(num3){
    console.log(num3 ** 2)
})


// E. Callback to Log Sum of Two Numbers:
function newHigherOrderFunction(num1, num2, callback){
    callback(num1, num2)
}

newHigherOrderFunction(3,7, function callback4(num11,num22){
    console.log(num11 + num22)
})
