
const numbers = [1,2,3,4];

//sum of numbers in array
const sum = numbers.reduce(function(result , element) {
    return result+element
}, 0)
//console.log(sum)

//sum of squares of numbers in array 
//create new array of numbers called square with map 
const square = numbers.map((element) => element * 2);
console.log("square with map", square)
//sum the squared numbers with reduce
const squareSum = square.reduce(function(result, element){
    return result+element//pass the result to next iteration alongwith the next element
},0);
console.log("square sum with reduce",squareSum);

