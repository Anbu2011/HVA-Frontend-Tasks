let mixedArray = [
    1, 
    'hello', 
    { name: 'John', age: 30 }, 
    [1, 2, 3], 
    42, 
    'world', 
    { name: 'Jane', age: 25 }
];


let numbers = mixedArray.filter(function callBack(element) {
    return typeof element === 'number';
});
console.log(numbers);

// ForEach method & callback as a  function Expression
const arr = []
mixedArray.forEach(function callBack(ele){
    if (typeof ele === 'number'){
        arr.push(ele)
    }
})
console.log(arr)

// ForEach method & callback as a separate function
const arr2 = []
mixedArray.forEach(callBack2)
console.log("callBack As separate function : ", arr2)
function callBack2(ele){
    if(typeof ele === 'number'){
        arr2.push(ele)
}}


let strings = mixedArray.filter(function callBack(element) {
    return typeof element === 'string';
});
console.log(strings);


let objects = mixedArray.filter(function callBack(element) {
    return typeof element === 'object' && !Array.isArray(element);
});
console.log(objects);


let arrays = mixedArray.filter(function callBack(element) {
    return Array.isArray(element);
});
console.log(arrays);
