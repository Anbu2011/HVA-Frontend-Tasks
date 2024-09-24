class Task{
    constructor(id, description, dueDate, status, priority){
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        this.priority = priority
    }
}

function displayTasks(tasks){
    tasks.forEach(ele => {
        console.log(`${ele.description} - ${ele.dueDate} (${ele.status})`)
    });
}

function addTask(id, description, dueDate, status, priority){
    const newTask = new Task(id, description, dueDate, status, priority)
    tasks.push(newTask)
    console.log("\nNewly added Task", tasks)
}

function updateTask(id, status){
    const taskUpdate = tasks.find(ele => ele.id === id)
    if(taskUpdate){
      taskUpdate.status = status
    } else{
      console.log('Id not found')
    }
    
    console.log("Task Updated Array",tasks)
}

function updateTaskWithMap(id, status){
    const updateUsingMap = tasks.map(ele => {
        if(ele.id === id){
          return new Task(
            ele.id,
            ele.description,
            ele.dueDate,
            status,
            ele.priority
          )
        } else{
          return ele
        }
        
    })
    console.log("\nTask Updated Array using Map",updateUsingMap)
}

function removeTask(id){
    tasks = tasks.filter(ele => ele.id !== id)
    
    console.log("\nTasks Array with Removed Element",tasks)
}


let tasks = [
    {id: 101, description: "Complete JavaScript project",dueDate: "2024-08-25",status: "Incomplete",priority: "High"},
    {id: 102,description: "Prepare for the team meeting",dueDate: "2024-08-22",status: "Incomplete",priority: "Medium"},
    {id: 103,description: "Buy groceries",dueDate: "2024-08-21",status: "Completed",priority: "Low"},
    {id: 104,description: "Submit assignment",dueDate: "2024-08-23",status: "Incomplete",priority: "High"},
    {id: 105,description: "Read new book",dueDate: "2024-08-27",status: "Incomplete",priority: "Low"},
]

displayTasks(tasks)
addTask(106, "Schedule doctor appointment", "2024-08-24", "Incomplete", "Medium")
updateTask(102,"Completed")
updateTaskWithMap(104,"Completed")
removeTask(104)
