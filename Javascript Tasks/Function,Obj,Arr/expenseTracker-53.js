class Expense{
    constructor(id,name,amount,date,category,paymentMethod){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
        this.category = category;
        this.paymentMethod = paymentMethod;
    }
}

function displayExpenses(expenses){
    expenses.forEach(ele => {
        console.log(`${ele.name} - $${ele.amount} (${ele.date})`)
    });
}

function addExpense(id, name, amount, date, category, paymentMethod){
    const newExpense = new Expense(id, name, amount, date, category, paymentMethod)
    expenses.push(newExpense)
    console.log("\nNew Expense Added",expenses)

}

function updateExpense(id,amount){
    const update = expenses.find(ele => ele.id === id)
    if(update){
      update.amount = amount
    } else{
      console.log('Id not found')
    }
    
    console.log("\n Updated Amount in expenses",expenses)
}

function updateExpenseWithMap(id,amount){
    const updateWithMap = expenses.map(ele =>{
        if(ele.id === id){
            return new Expense(
              ele.id,
              ele.name,
              amount,
              ele.date,
              ele.category,
              ele.paymentMethod
            )
        }
        return ele
    })
    expenses = updateWithMap
    console.log("\nNew Array Updated with Map", expenses)
}

function removeExpense(id){
    expenses = expenses.filter(ele => ele.id !== id);
    console.log("\nExpenses Array with Removed Expense",expenses)

}

let expenses = [
    {id: 301, name: "Groceries", amount: 150.75, date: "2024-08-01", category: "Food", paymentMethod: "Credit Card"},
    {id: 302, name: "Electricity Bill", amount: 80.00, date: "2024-08-05", category: "Utilities", paymentMethod: "Bank Transfer"},
    {id: 303, name: "Internet Subscription", amount: 50.00, date: "2024-08-10", category: "Utilities", paymentMethod: "Credit Card"},
    {id: 304, name: "Gym Membership", amount: 45.00, date: "2024-08-12", category: "Health & Fitness", paymentMethod: "Debit Card"},
    {id: 305, name: "Car Maintenance", amount: 200.00, date: "2024-08-15", category: "Transportation", paymentMethod: "Cash"},
]

displayExpenses(expenses)
addExpense(306,"Dinner at Restaurant", 75.50, "2024-08-18", "Entertainment", "Credit Card")
updateExpense(304,500)
updateExpenseWithMap(305,1500)
removeExpense(302)