class Product{
  constructor(id, name, price, quantity, category, supplier){
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.category = category;
      this.supplier = supplier;
  }
}

let inventory = [

new Product(201, "Milk", 2.50, 50, "Dairy", "DairyCo"),
new Product(202, "Bread", 1.50, 100, "Bakery", "BreadWorks"),
new Product(203, "Eggs", 5, 30, "Dairy", "FarmFresh"),
new Product(204, "Apples", 1.80, 40, "Produce", "FruitFarm"),
new Product(205, "Coffee", 10, 20, "Beverages", "BrewMasters"),
new Product(206, "Chicken Breast", 5.00, 40, "Meat", "MeatMakers")
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
  } else{
    console.log('Id not found')
  }
  console.log("Updated Array", inventory)
}


function updateProductWithMap(id,quantity){
  const update2 = inventory.map(ele =>{
    if (ele.id === id){
      return new Product(
        ele.id,
        ele.name,
        ele.price,
        quantity,
        ele.category,
        ele.supplier
      )
    } else{
      return ele
    }
  })
  inventory = update2
  console.log("Updated Using MAP", inventory)
}

function removeProduct(id){
  inventory = inventory.filter(ele => ele.id !== id)
  
  console.log("Inventory with New Array", inventory)
  
}

displayProducts(inventory)
addProduct(207, "Yogurt", 2.50, 60, "Dairy", "DairyDelight")
updateProduct(203, 55)
updateProductWithMap(204,150)
removeProduct(206)