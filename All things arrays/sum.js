// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

function sum(numbers){
    let totalSum = 0
   for(let i = 0; i < numbers.length; i++){
    totalSum += numbers[i]
   }
   return totalSum
}

console.log("sum with for loop-->", sum([1, 5.2, 4, 0, -1]))



//using reduce()

function sumWithReduce(numbers){
    return numbers.reduce( (a,b) => a + b, 0 );
}

console.log("sum with reduce-->", sumWithReduce([1, 5.2, 4, 0, -1]))