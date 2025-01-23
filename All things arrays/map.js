// The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

//In the following example, each number in an array is doubled.

const numbers1 = [1,2,3,4]
// Pass a function to mapd
const map1 = numbers1.map((element) => element * 2);
console.log("doubled array -->", map1);


//Example 2: Mapping an array of numbers to an array of square roots
const numbers2 = [1,4,9];
//pass function to map
const map2 = numbers2.map((element) => Math.sqrt(element));
console.log("square root -->", map2)