class Book{
    constructor (id, title, author, price, quantity, genre, publishedYear){
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
        this.genre = genre;
        this.publishedYear = publishedYear;
    }
}

function displayBooks(inventory){
    inventory.forEach(ele => {
        console.log(`${ele.title} - ${ele.author} ($${ele.price})`)
    });
}


function addBook(id , title, author, price, quantity, genre, publishedYear){
    const newBook = new Book(id, title, author, price, quantity, genre, publishedYear)
    inventory.push(newBook)
    console.log("\nInventory Array After adding NewBook Object", inventory)
}

function updateBook(id,quantity){
    const update_quantity = inventory.find(ele => ele.id === id)
    if(update_quantity){
      update_quantity.quantity = quantity
    } else{
      console.log('Id not found')
    }
    console.log("\nQuantity Updated", inventory)
}

function updateBookWithMap(id, quantity){
    const updateUsingMap = inventory.map(ele =>{
        if(ele.id === id){
          return new Book(
            ele.id,
            ele.title,
            ele.author,
            ele.price,
            quantity,
            ele.genre,
            ele.publishedYear
          ) 
        } else{
          return ele
        }
        
    })
    console.log("\nNew Map Array with updated value", updateUsingMap)
}

function removeBook(id){
    inventory = inventory.filter(ele => ele.id !== id)
    
    console.log("New Array ",inventory)

}

let inventory = [
    {id: 401, title: "To Kill a Mockingbird", author: "Harper Lee", price: 10.99, quantity: 50, genre: "Fiction", publishedYear: 1960},
    {id: 402, title: "1984", author: "George Orwell", price: 8.99, quantity: 40, genre: "Dystopian", publishedYear: 1949},
    {id: 403, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99, quantity: 30, genre: "Classic", publishedYear: 1925},
    {id: 404, title: "Pride and Prejudice", author: "Jane Austen", price: 9.99, quantity: 25, genre: "Romance", publishedYear: 1813},
    {id: 405, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 11.99, quantity: 35, genre: "Fiction", publishedYear: 1951},
]

displayBooks(inventory)
addBook(406,"Moby Dick", "Herman Melville", 14.99, 20, "Adventure", 1851)
updateBook(404,50)

updateBookWithMap(402,200)
removeBook(403)