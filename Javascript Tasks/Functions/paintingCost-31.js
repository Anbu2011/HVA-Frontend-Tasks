function areaOfRectangle(width, height){                                      //CALLBACK FUNCTION
    return width * height
}

function areaOfCircle(radius){                                                //CALLBACK FUNCTION
    return 3.14 * radius**2
}

function areaOfTriangle(base, height){                                        //CALLBACK FUNCTION
    return 0.5 * base * height
}


function calculatePaintingCost(dimension1, dimension2, calculateArea){        //HOF
    const area = calculateArea(dimension1, dimension2)
    const costPerUnit = 2
    const totalCost = area * costPerUnit
    return totalCost
}
console.log(calculatePaintingCost(5,10, areaOfRectangle))

console.log(calculatePaintingCost(3,null, areaOfCircle))

console.log(calculatePaintingCost(6,8, areaOfTriangle))