class  Employee{
    constructor( name, email, age, department, position, salary){
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }

    introduce(){
        console.log(`Hello, I am ${this.name}, ${this.position}`)
    }

    displaySalary(){
        console.log(`Salary : $ ${this.salary}`)
    }
}

const  newEmployee = new Employee('Ajay', 'ajay2002@gmail.com', 21, 'CSE', 'Developer', '2000')
console.log(newEmployee)

const  manager = new Employee('Jai', 'jai2002@gmail.com', 32, 'MSc', 'Manager', '6000')
console.log(manager)

newEmployee.introduce()
newEmployee.displaySalary()

manager.introduce()
manager.displaySalary()