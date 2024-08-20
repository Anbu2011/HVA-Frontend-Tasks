//Custom ForEach
console.log("Custom ForEach")
function forEachArray(arr, callback){
    for(i=0; i<arr.length;i++){
        callback(arr[i])
    }
}

function callback(ele){
    console.log(ele)
}

const arr = [1,4,3,2,1]
forEachArray(arr,callback)

//Custom MAP
console.log("\nCustom MAP")
function mapArray(arr2, callback2){
    newArray = []
    for(i=0; i<arr2.length; i++){
        newArray.push(callback2(arr2[i]))
    }
    return newArray
}

function callback2(ele){
    return ele ** 2;
}

const arr2 = [1,5,6,4,3]
customMap = mapArray(arr,callback2)
console.log(customMap)


//Custom FILTER
console.log("\nCustom FILTER")
function filterArray(arr3,callBack3){
    newArray2 = []
    for(i=0;i<arr3.length;i++){
        let bool = callBack3(arr3[i])
        if (bool === true){
            newArray2.push(arr3[i])
        }
    }
    return newArray2
}

function callBack3(ele){
    return ele % 2 == 0;
}

const arr3 = [1,3,4,10,3,4]
customFilter = filterArray(arr3,callBack3)
console.log(customFilter)
