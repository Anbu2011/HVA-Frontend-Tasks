class Product{
    constructor(id, name, price, quantity, category, supplier){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
        this.supplier = supplier;
    }
};

const inventory = [
    {id: 201, name: "Milk", price: 2.50, quantity: 50, category: "Dairy", supplier: "DairyCo"},
    {id: 202, name: "Bread", price: 1.50, quantity: 100, category: "Bakery", supplier: "BreadWorks"},
    {id: 203, name: "Eggs", price: 5, quantity: 30, category: "Dairy", supplier: "FarmFresh"},
    {id: 204, name: "Apples", price: 1.80, quantity: 40, category: "Produce", supplier: "FruitFarm"},
    {id: 205, name: "Coffee", price: 10, quantity: 20, category: "Beverages", supplier: "BrewMasters"},
    {id: 206, name: "Chicken Breast", price: 5.00, quantity: 40, category: "Meat", supplier: "MeatMakers"},
]

function displayProducts(inventory) {
    inventory.forEach(ele => console.log(`${ele.name} - ${ele.price} (${ele.quantity})`));
}

function addProduct(id, name, price, quantity, category, supplier){
    const newObj = new Product(id, name, price, quantity, category, supplier)
    inventory.push(newObj)
    console.log("Product Added", inventory)
}

function updateProduct(id,quantity){
    const update = inventory.find(ele => ele.id===id)
    if(update){
        update.quantity = quantity
    }
    console.log("Updated Array", inventory)
}


function updateProductWithMap(id,quantity){
    const update2 = inventory.map(ele =>{
        if (ele.id === id){
            ele.quantity = quantity
        }
        return ele
    })
    console.log("Updated Using MAP", update2)
}

function removeProduct(id){
    const remove = inventory.filter(ele => ele.id !== id)
    console.log("Array with Removed one object", remove)

    inventory.length = 0  //clear the array
    inventory.push(...remove)
    console.log("Inventory with New Array", inventory)
}

displayProducts(inventory)
addProduct(207, "Yogurt", 2.50, 60, "Dairy", "DairyDelight")
updateProduct(203, 55)
updateProductWithMap(204,150)
removeProduct(206)
