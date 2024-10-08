const products = [
    {id : 101, name : "Dairy", price : 10, category : "Food"},
    {id : 102, name : "Bat", price : 12, category : "Sports-Equipments"},
    {id : 103, name : "wheat", price : 8, category : "Food"},
    {id : 104, name : "Child Toys", price : 6, category : "Toys"},
    {id : 105, name : "Ice-Creams", price : 20, category : "Food"},
]

function displayProducts(products){
    products.forEach(ele => {
        console.log(`${ele.name} - $${ele.price}`)
    });

    const productsWithTax = products.map(ele =>{
        return {...ele, priceWithTax : (ele.price + ele.price*10/100).toFixed(2)}
    })
    console.log(productsWithTax)

    const foodProducts = products.filter(ele => ele.category==='Food')
    console.log(foodProducts)

    const affordableProducts = products.filter(ele => ele.price < 10)
    console.log(affordableProducts)

    const affordableProductsStrings = affordableProducts.map(ele => `${ele.name} - ${ele.price}`)
    console.log(affordableProductsStrings)

    var  totalPrice = 0
    products.forEach(ele => {
        totalPrice += ele.price
    });
    console.log(`Total Price is $${totalPrice.toFixed(2)}`)
}

displayProducts(products)