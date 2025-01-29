// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n){
    let newArray =[];
    for( let i = 1; i <= n; i++){
        newArray.push(i)
    }
    console.log(newArray)

   return  newArray.map((element) => element % 15 ===0 ? "FizzBuzz" : element % 3 === 0 ? "Fizz" : element % 5 === 0 ? "Buzz" : element) 
}

console.log(fizzbuzz(100))