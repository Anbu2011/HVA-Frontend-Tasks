const student={
    name : 'Ajay',
    email : 'ajays2002@gmail.com' ,
    age : 21,
    greet : function(){
        console.log(`Hello ${student.name}`)
    } ,

    address : {
        country : 'India',
        city : 'chennai',
        pin_code : 600045 
    }
}

console.log(student.name)

student.age = 10
console.log(student.age)


student.greet()

console.log(student.address.country)

student.address.pin_code = 605108
console.log(student.address)


const friend={
    name : 'Arvind',
    email : 'arvinds2000@gmail.com' ,
    age : 24,
    address : {
        country : 'India',
        city : 'coimbatore',
        pin_code : 600010 
    } ,

    greet : function(){
        console.log(`Hello ${friend.name}`)
    } ,
}
friend.greet()
console.log(friend)


const  topper = {
    name : 'Bob',
    email : 'bob2@gmail.com' ,
    age : 25,
    address : {
        country : 'India',
        city : 'Puducherry',
        pin_code : 600156 
    } ,

    greet : function(){
        console.log(`Hello ${topper.name}`)
    } ,
}
topper.greet()
console.log(topper)

//CLASSES

class Student{
    constructor(name, email, age, country, city, pin_code){
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = {
            country : country,
            city : city,
            pin_code : pin_code
        };
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }

    getFullAddress(){
        return `${this.address.country} , ${this.address.city} - ${this.address.pin_code}`
    }
}

const me = new Student('Anbu', 'anbu2002@gmail.com', 21 , 'India', 'Vilupuram', 605108)
const friend1 = new Student('Bharani', 'bharani2001@gmail.com', 23, 'India', 'Bangalore', 752655)
const friend2 = new Student('Vikrant', 'vik2000@gmail.com', 24, 'Australia', 'Sydney', 555222)

console.log(me)
console.log(friend1)
console.log(friend2)


me.greet()
console.log(me.getFullAddress())

friend1.greet()
console.log(friend1.getFullAddress())

friend2.greet()
console.log(friend2.getFullAddress())