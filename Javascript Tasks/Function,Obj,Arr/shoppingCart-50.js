const cart = [
    {name : "Ajay" , price : 500 , quantity : 2},
    {name : "Alex" , price : 400 , quantity : 3},
    {name : "Gopi" , price : 600 , quantity : 1},
    {name : "Elan" , price : 700 , quantity : 4},
    {name : "Babu" , price : 300 , quantity : 5},
]

function calculateTotalPrice(cart){
    var totalPrice = 0
    cart.forEach(ele => {totalPrice += (ele.price * ele.quantity)});
    return totalPrice
}

console.log(calculateTotalPrice(cart))