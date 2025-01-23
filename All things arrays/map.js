// The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

//In the following example, each number in an array is doubled.

const numbers = [1,2,3,4]
const newArray = numbers.map(element => element * 2);
console.log("new array is double -->", newArray);

