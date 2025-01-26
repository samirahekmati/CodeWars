// make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

function descendingOrder(n){
    //convert to srting and the array of numbers
  const newArray = String(n).split("").map(Number);
  //sort the array in ascendig order then reverse
  const sortedArray = newArray.sort().reverse();
  //convert array of digits to string and then to numbers
  return parseInt(sortedArray.join(""))

    
}

console.log(descendingOrder(42145))


//easier solution
function descendingOrder2(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }