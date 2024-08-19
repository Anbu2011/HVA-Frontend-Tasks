const colors = ["red", "green", "blue"]
console.log(colors[0])

colors[1] = "yellow"
console.log(colors[1])

colors.push("pink")
console.log(colors[colors.length-1])


for(i=0; i<colors.length; i++){
    console.log("for loop", i,"th index" , colors[i])
}

var i = 0
while(i < colors.length){
    console.log(`While Loop ${i}th index ${colors[i]}`);
    i++;
}
for(let color of colors){
    console.log(`for..of Loop, ${color}`)
}


console.log("Type Of" , typeof colors)
console.log("Type Of" , Array.isArray(colors))
console.log("Length of the array", colors.length)


colors.push("white")
console.log(colors)
colors.pop()
console.log(colors)
const blue_index = colors.indexOf("blue")
console.log("blue_index", blue_index)


colors.owner = "Anbu"
console.log(colors.owner)
for(let color in colors){
    console.log(`${color} : ${colors[color]}`)
}
