const people = [
    {name : "Ajay", age: 21},
    {name : "jay", age: 20},
    {name : "Nirmal", age: 32},
    {name : "Bharani", age: 23},
]

function calculateAverageAge(people){
    var totalAge = 0
    people.forEach(ele => {totalAge += ele.age});
    const avgAge = totalAge/people.length
    return avgAge
}

console.log(calculateAverageAge(people))
